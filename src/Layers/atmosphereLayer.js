import { Mesh } from "three";
import { Vector4 } from "three";
import { ShaderMaterial } from "three";
import { PlaneGeometry } from "three";

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
        uniform vec4 color;
        uniform vec4 color2;
        uniform vec4 color3;
        float pixels = 100.0;
        
        float dist(vec2 p0, vec2 pf){
            return sqrt((pf.x-p0.x)*(pf.x-p0.x)+(pf.y-p0.y)*(pf.y-p0.y));
        }
       
        void main() {
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;   
            vec2 pos_ndc = 2.0 * uv.xy  - 1.0;
            float dist = length(pos_ndc);
            
            float step0 = 0.65;
            float step1 = 0.87;
            float step2 = 0.97;
            float step3 = 1.04;
            float step4 = 1.04;
        
            vec4 color = mix(vec4(0,0,0,0), color, smoothstep(step0, step1, dist));
            color = mix(color, color2, smoothstep(step1, step2, dist));
            color = mix(color, color3, smoothstep(step2, step3, dist));
            color = mix(color, vec4(0,0,0,0), smoothstep(step3, step4, dist));
        
            gl_FragColor = color;
        }
    `;
}


export const createAtmosphereLayer = () => 
{
    const atmopshereGeometry = new PlaneGeometry(1.02, 1.02);
    const atmopshereMaterial = new ShaderMaterial({
        uniforms: {
            color: {value: new Vector4(173/255,216/255,230/255, 0.25)},
            color2: {value: new Vector4(0/255,127/255,255/255,  0.35)},
            color3: {value: new Vector4(0/255,0/255,128/255,    0.45)}
        },
        vertexShader: vertexShader(),
        fragmentShader: fragmentShader(),
        transparent: true,
    });

    const atmosphereLayer = new Mesh(atmopshereGeometry, atmopshereMaterial)

    return atmosphereLayer;
} 