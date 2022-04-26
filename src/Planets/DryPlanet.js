import { Group } from "three";
import { Mesh, NearestFilter, PlaneGeometry, ShaderMaterial, TextureLoader, Vector2 } from "three";
import { flip } from "../utils.js";

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
        float light_distance1 = 0.362;
        float light_distance2 = 0.525;
        uniform float time_speed;
        float dither_size = 2.0;
        uniform sampler2D colors;
        float size = 10.0;
        int OCTAVES = 4;
        uniform float seed;
        uniform float time;
        bool should_dither = true;

        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
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
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        
        void main() {
            //pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            bool dith = dither(uv, vUv.xy);
            
            // cut out a circle
            float d_circle = distance(uv, vec2(0.5));
            float a = step(d_circle, 0.49999);
            
            uv = spherify(uv);
            
            // check distance distance to light
            float d_light = distance(uv , vec2(light_origin));
            
            uv = rotate(uv, rotation);
            
            // noise
            float f = fbm(uv*size+vec2(time*time_speed, 0.0));
            
            // remap light
            d_light = smoothstep(-0.3, 1.2, d_light);
            
            if (d_light < light_distance1) {
                d_light *= 0.9;
            }
            if (d_light < light_distance2) {
                d_light *= 0.9;
            }
            
            
            float c = d_light*pow(f,0.8)*3.5; // change the magic nums here for different light strengths
            
            // apply dithering
            if (dith || !should_dither) {
                c += 0.02;
                c *= 1.05;
            }
            
            // now we can assign colors based on distance to light origin
            float posterize = floor(c*4.0)/4.0;
            vec4 col = texture(colors, vec2(posterize, 0.0));
            
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `;
}

export function createDryPlanet(lightPos = new Vector2(0.39, 0.7), colors = null, rotationSpeed = 0.1, rotation = 0.0) {

    const colorSchemeTexture1 = new TextureLoader().load("src/colorScheme/colorScheme2.png");
    colorSchemeTexture1.magFilter = NearestFilter
    colorSchemeTexture1.minFilter = NearestFilter

    const planetGeometry = new PlaneGeometry(1, 1);
    const planetMaterial = new ShaderMaterial({
        uniforms: {
            pixels: {value: 100.0},
            colors: {value: colorSchemeTexture1},
            light_origin: { value: lightPos },
            time_speed: { value: rotationSpeed },
            rotation: { value: rotation },
            seed: { value: flip() ? Math.random() * 10 : Math.random() * 100 },
            time: { value: 0.0 }
        },
        vertexShader: vertexShader(),
        fragmentShader: fragmentShader(),
        transparent: true
    });

    const basePlanet = new Mesh(planetGeometry, planetMaterial)
    return new Group().add(basePlanet)
}