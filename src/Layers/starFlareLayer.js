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
        uniform sampler2D colorramp;
        bool should_dither = true;

        uniform float storm_width;
        uniform float storm_dither_width;
        uniform float circle_amount;
        uniform float circle_scale;
        uniform float scale;

        uniform float seed;
        float size = 2.0;
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
            return smoothstep(circle, circle+0.5, invert * circle_scale * rand(rand_co*1.5));
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
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        

        void main() {
            vec2 pixelized = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            bool dith = dither(vUv.xy, pixelized);
	
            pixelized = rotate(pixelized, rotation);
            
            // counter rotation against rotation caused by the way uv's are made later
            vec2 uv = pixelized;//rotate(pixelized, -time  * time_speed);
            
            // angle from centered uv's
            float angle = atan(uv.x - 0.5, uv.y - 0.5) * 0.4;
            // distance from center
            float d = distance(pixelized, vec2(0.5));
            
            // we make uv circular here to have eternally outward moving stuff
            vec2 circleUV = vec2(d, angle);
            
            // two types of noise values
            float n = fbm(circleUV*size -time * time_speed);
            float nc = circle(circleUV*scale -time * time_speed + n);
            
            nc *= 1.5;
            float n2 = fbm(circleUV*size -time + vec2(100, 100));
            nc -= n2 * 0.1;
            
            // our alpha, default 0
            float a = 0.0;
            if (1.0 - d > nc) {
                // now we generate very thin strips of positive alpha if our noise has certain values and is close enough to center
                if (nc > storm_width - storm_dither_width + d && (dith || !should_dither)) {
                    a = 1.0;
                } else if (nc > storm_width + d) { // could use an or statement instead, but this looks more clear to me
                    a = 1.0;
                }
            }
            
            // use our two noise values to assign colors
            float interpolate = floor(n2 + nc);
            vec4 col = texture(colorramp, vec2(interpolate, 0.0));
            
            // final step to not have everything appear from the center
            a *= step(n2 * 0.25, d);
            
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `;
}

export function createStarFlareLayer(rotationSpeed = 0.05, stormWidth = 0.2, stormDitherWidth = 0.07, color = null) {

    const palette = color ? `src/colorScheme/starPalette/${color}Palette.png` : "src/colorScheme/starPalette/orangePalette.png"
    const colorSchemeTexture = new TextureLoader().load(palette);
    colorSchemeTexture.magFilter = NearestFilter
    colorSchemeTexture.minFilter = NearestFilter

    const planetGeometry = new PlaneGeometry(1.5, 1.5);
    const planetMaterial = new ShaderMaterial({
        uniforms: {
            pixels: { value: 200.0 },
            colorramp: { value: colorSchemeTexture },
            time_speed: { value: rotationSpeed },
            rotation: { value: Math.random() },
            seed: { value: flip() ? Math.random() * 10 : Math.random() * 100 },
            time: { value: 0.0 },
            storm_width: { value: stormWidth },
            storm_dither_width: { value: stormDitherWidth },
            circle_amount: { value: 2.0 },
            circle_scale: { value: 1.0 },
            scale: { value: 1.0 },
        },
        vertexShader: vertexShader(),
        fragmentShader: fragmentShader(),
        transparent: true,
    });

    const basePlanet = new Mesh(planetGeometry, planetMaterial)

    return basePlanet;
}