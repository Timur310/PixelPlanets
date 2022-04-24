import { TextureLoader } from "three";
import { NearestFilter } from "three";
import { Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector4 } from "three";
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
        uniform float time_speed;
        uniform float time;
        uniform float rotation;
        uniform vec4 color;
        bool should_dither = true;

        uniform float circle_amount;
        uniform float circle_size;
        uniform float scale;

        uniform float seed;
        float size = 4.0;
        int OCTAVES = 4;
        float TILES = 1.0;


        float rand(vec2 co){
            co = mod(co, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        
        vec2 rotate(vec2 vec, float angle) {
            vec -=vec2(0.5);
            vec *= mat2(vec2(cos(angle),-sin(angle)), vec2(sin(angle),cos(angle)));
            vec += vec2(0.5);
            return vec;
        }
        
        float circle(vec2 uv) {
            float invert = 1.0 / circle_amount;
            
            if (mod(uv.y, invert*2.0) < invert) {
                uv.x += invert*0.5;
            }
            vec2 rand_co = floor(uv*circle_amount)/circle_amount;
            uv = mod(uv, invert)*circle_amount;
            
            float r = rand(rand_co);
            r = clamp(r, invert, 1.0 - invert);
            float circle = distance(uv, vec2(r));
            return smoothstep(circle, circle+0.5, invert * circle_size * rand(rand_co*1.5));
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
            float scl = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scl;
                coord *= 2.0;
                scl *= 0.5;
            }
            return value;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        

        void main() {
            vec2 pixelized = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            vec2 uv = rotate(pixelized, rotation);

            // angle from centered uv's
            float angle = atan(uv.x - 0.5, uv.y - 0.5);
            float d = distance(pixelized, vec2(0.5));
            
            
            float c = 0.0;
            for(int i = 0; i < 15; i++) {
                float r = rand(vec2(float(i)));
                vec2 circleUV = vec2(d, angle);
                c += circle(circleUV*size -time * time_speed - (1.0/d) * 0.1 + r);
            }
            
            c *= 0.37 - d;
            c = step(0.07, c - d);
            
            gl_FragColor = vec4(color.rgb, c * color.a);
        }
    `;
}

export function createStarBlobLayer(rotationSpeed = 0.1, blobColor=null) {

    const color = blobColor ? blobColor : new Vector4(255/255, 165/255, 0/255, 1)

    const planetGeometry = new PlaneGeometry(1.3, 1.3);
    const planetMaterial = new ShaderMaterial({
        uniforms: {
            pixels: {value: 200.0},
            color: {value: color},
            time_speed: { value: rotationSpeed },
            rotation: { value: Math.random() },
            seed: { value: flip() ? Math.random() * 10 : Math.random() * 100 },
            time: { value: 0.0 },
            circle_amount: {value: 3.0},
            circle_size: {value: 1.5},
            scale: {value: 1.0},
        },
        vertexShader: vertexShader(),
        fragmentShader: fragmentShader(),
        transparent: true,
    });

    const basePlanet = new Mesh(planetGeometry, planetMaterial)

    return basePlanet;
}