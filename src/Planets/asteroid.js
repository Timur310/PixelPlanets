import { Group } from "three";
import { Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector4 } from "three";
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

const fragmentShaderPlanet = () => {
    return `
        varying vec3 vUv;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform vec4 color1;
        uniform vec4 color2;
        uniform vec4 color3;
        uniform float size;
        int OCTAVES = 4;
        uniform float seed;
        uniform float time;
        bool should_dither = true;

        float rand(vec2 coord) {
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
        
        // by Leukbaars from https://www.shadertoy.com/view/4tK3zR
        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return m = smoothstep(r-.10*r,r,m);
        }
        
        float crater(vec2 uv) {
            float c = 1.0;
            for (int i = 0; i < 2; i++) {
                c *= circleNoise((uv * size) + (float(i+1)+10.));
            }
            return 1.0 - c;
        }

        void main() {
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            // we use this val later to interpolate between shades
            bool dith = dither(uv, vUv.xy);
            
            // distance from center
            float d = distance(uv, vec2(0.5));
            
            // optional rotation, do this after the dither or the dither will look very messed up
            uv = rotate(uv, time*0.1);
            
            // two noise values with one slightly offset according to light source, to create shadows later
            float n = fbm(uv * size);
            float n2 = fbm(uv * size + (rotate(light_origin, rotation)-0.5) * 0.5);
            
            // step noise values to determine where the edge of the asteroid is
            // step cutoff value depends on distance from center
            float n_step = step(0.2, n - d);
            float n2_step = step(0.2, n2 - d);
            
            // with this val we can determine where the shadows should be
            float noise_rel = (n2_step + n2) - (n_step + n);
            
            // two crater values, again one extra for the shadows
            float c1 = crater(uv );
            float c2 = crater(uv + (light_origin-0.5)*0.03);
        
            // now we just assign colors depending on noise values and crater values
            // base
            vec4 col = color2;
            
            // noise
            if (noise_rel < -0.06 || (noise_rel < -0.04 && (dith || !should_dither))) {
                col = color1;
            }
            if (noise_rel > 0.05 || (noise_rel > 0.03 && (dith || !should_dither))) {
                col = color3;
            }
            
            // crater
            if (c1 > 0.4)  {
                col = color2;
            }
            if (c2<c1) {
                col = color3;
            }
            
            gl_FragColor = vec4(col.rgb, n_step * col.a);
        }
    `;
}

export const createAsteroid = (lightPos = new Vector2(0.39, 0.7), colors = null, rotation = 0.0) => {
    const colorPalette = colors ? colors : [
        new Vector4(155 / 255, 158 / 255, 184 / 255, 1),
        new Vector4(71 / 255, 97 / 255, 124 / 255, 1),
        new Vector4(53 / 255, 57 / 255, 85 / 255, 1)
    ]
    const planetGeometry = new PlaneGeometry(1.5, 1.5);
    const planetMaterial = new ShaderMaterial({
        uniforms: {
            pixels: {value: 100.0},
            color1: { value: colorPalette[0]},
            size: {value: Math.random() * 10},
            color2: { value: colorPalette[1]},
            color3: { value: colorPalette[2]},
            light_origin: { value: lightPos },
            rotation: { value: rotation },
            seed: { value: flip() ? Math.random() * 10 : Math.random() * 100 },
            time: { value: 0.0 }
        },
        vertexShader: vertexShader(),
        fragmentShader: fragmentShaderPlanet(),
        transparent: true,
    });

    const asteroid = new Mesh(planetGeometry, planetMaterial)

    return new Group().add(asteroid);
}