import { Mesh, NearestFilter, PlaneGeometry, ShaderMaterial, TextureLoader, Vector2 } from "three";
import { flip } from "../utils";

const vertexShader = () => {
    return `
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `;
}

const fragmentShader = () => {
    return `
        varying vec3 vUv;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform float ring_width;
        uniform float ring_perspective;
        uniform float scale_rel_to_planet;
        
        uniform sampler2D colorscheme;
        uniform sampler2D dark_colorscheme;
        
        float size = 25.0;
        int OCTAVES = 8;
        uniform float seed;
        uniform float time;

        float rand(vec2 coord) {
            coord = mod(coord, vec2(2.0,1.0)*round(size));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return smoothstep(0.0, r, m*0.75);
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }

        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            float light_d = distance(uv, light_origin);
            uv = rotate(uv, rotation);
            
            // center is used to determine ring position
            vec2 uv_center = uv - vec2(0.0, 0.5);
            
            // tilt ring
            uv_center *= vec2(1.0, ring_perspective);
            float center_d = distance(uv_center,vec2(0.5, 0.0));
            
            
            // cut out 2 circles of different sizes and only intersection of the 2.
            float ring = smoothstep(0.5-ring_width*2.0, 0.5-ring_width, center_d);
            ring *= smoothstep(center_d-ring_width, center_d, 0.4);
            
            // pretend like the ring goes behind the planet by removing it if it's in the upper half.
            if (uv.y < 0.5) {
                ring *= step(1.0/scale_rel_to_planet, distance(uv,vec2(0.5)));
            }
            
            // rotate material in the ring
            uv_center = rotate(uv_center+vec2(0, 0.5), time*time_speed);
            // some noise
            ring *= fbm(uv_center*size);
            
            // apply some colors based on final value
            float posterized = floor((ring+pow(light_d, 2.0)*2.0)*4.0)/4.0;
            vec4 col;
            if (posterized <= 1.0) {
                col = texture(colorscheme, vec2(posterized, uv.y));
            } else {
                col = texture(dark_colorscheme, vec2(posterized-1.0, uv.y));
            }
            float ring_a = step(0.28, ring);

            gl_FragColor = vec4(col.rgb, ring_a * col.a);
        }
    `;
}

export function createRingLayer(lightPos = new Vector2(0.39, 0.7), rotationSpeed = 0.1, ringWidth = 0.143, perspective = 6.0, scalePlanet = 4.0) {

    const colorSchemeTexture1 = new TextureLoader().load("src/colorScheme/colorScheme1.png");
    colorSchemeTexture1.magFilter = NearestFilter
    colorSchemeTexture1.minFilter = NearestFilter

    const colorSchemeTexture2 = new TextureLoader().load("src/colorScheme/colorScheme2.png");
    colorSchemeTexture2.magFilter = NearestFilter
    colorSchemeTexture2.minFilter = NearestFilter

    const ringGeometry = new PlaneGeometry(1, 1);
    const ringMaterial = new ShaderMaterial({
        uniforms: {
            colorscheme: { value: colorSchemeTexture1 },
            dark_colorscheme: { value: colorSchemeTexture2 },
            ring_width: { value: ringWidth },
            ring_perspective: { value: perspective },
            scale_rel_to_planet: { value: scalePlanet },
            pixels: { value: 250.0 },
            light_origin: { value: lightPos },
            time_speed: { value: rotationSpeed },
            rotation: { value: Math.random() },
            seed: { value: flip() ? Math.random() * 10 : Math.random() * 100 },
            time: { value: 0.0 }
        },
        vertexShader: vertexShader(),
        fragmentShader: fragmentShader(),
        transparent: true,
    });

    const ringLayer = new Mesh(ringGeometry, ringMaterial)

    return ringLayer;
}