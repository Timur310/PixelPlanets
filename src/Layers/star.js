import { TextureLoader } from "three";
import { NearestFilter } from "three";
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
        uniform float time_speed;
        uniform float time;
        uniform float rotation;
        uniform sampler2D colorramp;
        bool should_dither = true;

        uniform float seed;
        float size = 15.0;
        int OCTAVES = 5;
        float TILES = 2.0;


        float rand(vec2 co) {
            co = mod(co, vec2(1.0,1.0)*round(size));
            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        vec2 rotate(vec2 vec, float angle) {
            vec -=vec2(0.5);
            vec *= mat2(vec2(cos(angle),-sin(angle)), vec2(sin(angle),cos(angle)));
            vec += vec2(0.5);
            return vec;
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
        
        vec2 Hash2(vec2 p) {
            float r = 523.0*sin(dot(p, vec2(53.3158, 43.6143)));
            return vec2(fract(15.32354 * r), fract(17.25865 * r));
            
        }
        
        float cells(in vec2 p, in float numCells) {
            p *= numCells;
            float d = 1.0e10;
            for (int xo = -1; xo <= 1; xo++)
            {
                for (int yo = -1; yo <= 1; yo++)
                {
                    vec2 tp = floor(p) + vec2(float(xo), float(yo));
                    tp = p - tp - Hash2(mod(tp, numCells / TILES));
                    d = min(d, dot(tp, tp));
                }
            }
            return sqrt(d);
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
	
            // cut out a circle
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(distance(pixelized, vec2(0.5)), .49999);
            
            // use dither val later to mix between colors
            bool dith = dither(vUv.xy, pixelized);
            
            pixelized = rotate(pixelized, rotation);
            
            // spherify has to go after dither
            pixelized = spherify(pixelized);
            
            // use two different sized cells for some variation
            float n = cells(pixelized - vec2(time * time_speed * 2.0, 0), 10.0);
            n *= cells(pixelized - vec2(time * time_speed * 1.0, 0), 20.0);
        
            
            // adjust cell value to get better looking stuff
            n*= 2.;
            n = clamp(n, 0.0, 1.0);
            if (dith || !should_dither) { // here we dither
                n *= 1.3;
            }
            
            // constrain values 4 possibilities and then choose color based on those
            float interpolate = floor(n * 3.0) / 3.0;
            vec4 col = texture(colorramp, vec2(interpolate, 0.0));
            
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `;
}

export function createStar(lightPos = new Vector2(0.39, 0.7), lightIntensity = 0.1, rotationSpeed = 0.01, rotation = 0.0, color=null) {

    const palette = color ? `src/colorScheme/starPalette/${color}Palette.png` : "src/colorScheme/starPalette/orangePalette.png"
    const colorSchemeTexture = new TextureLoader().load(palette);
    colorSchemeTexture.magFilter = NearestFilter
    colorSchemeTexture.minFilter = NearestFilter

    const planetGeometry = new PlaneGeometry(1, 1);
    const planetMaterial = new ShaderMaterial({
        uniforms: {
            pixels: {value: 100.0},
            colorramp: {value: colorSchemeTexture},
            lightIntensity: { value: lightIntensity },
            light_origin: { value: lightPos },
            time_speed: { value: rotationSpeed },
            rotation: { value: Math.random() },
            seed: { value: flip() ? Math.random() * 10 : Math.random() * 100 },
            time: { value: 0.0 }
        },
        vertexShader: vertexShader(),
        fragmentShader: fragmentShaderPlanet(),
        transparent: true,
    });

    const basePlanet = new Mesh(planetGeometry, planetMaterial)

    return basePlanet;
}