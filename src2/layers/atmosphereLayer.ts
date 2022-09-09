import { BufferGeometry, Mesh, PlaneGeometry, ShaderMaterial, Vector3, Vector4 } from "three";

export class AtmopshereLayer {

    private _col: Vector4;
    private _col2: Vector4;
    private _col3: Vector4;
    private _geometry: BufferGeometry;
    private _mesh: Mesh;
    private _material: ShaderMaterial;

    constructor(color?: Vector3, color2?: Vector3, color3?: Vector3) {
        this._col = color ? new Vector4(color.x, color.y, color.z, 0.25) : new Vector4(173 / 255, 216 / 255, 230 / 255, 0.25);
        this._col2 = color2 ? new Vector4(color2.x, color2.y, color2.z, 0.35) : new Vector4(0 / 255, 127 / 255, 255 / 255, 0.35);
        this._col3 = color3 ? new Vector4(color3.x, color3.y, color3.z, 0.45) : new Vector4(0 / 255, 0 / 255, 128 / 255, 0.45);

        this._geometry = new PlaneGeometry(1.02, 1.02);
        this._material = new ShaderMaterial({
            uniforms: {
                color: { value: this._col },
                color2: { value: this._col2 },
                color3: { value: this._col3 }
            },
            vertexShader: this.getVertexShader(),
            fragmentShader: this.getFragmentShader(),
            transparent: true,
        });

        this._mesh = new Mesh(this._geometry, this._material);

    }

    private readonly getVertexShader = (): string => {
        return `
        varying vec3 vUv; 
    
        void main() {
          vUv = position; 
    
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewPosition; 
        }
      `;
    }

    private readonly getFragmentShader = (): string => {
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

    // update uniforms here
    public update(): void {

    }

    get mesh(): Mesh {
        return this._mesh
    }

    get material(): ShaderMaterial {
        return this._material;
    }

    get geometry(): BufferGeometry {
        return this._geometry;
    }

    get color(): Vector4 {
        return this._col;
    }

    get color2(): Vector4 {
        return this._col2;
    }

    get color3(): Vector4 {
        return this._col3;
    }

    set color(col: Vector4) {
        this._col = col;
    }

    set color2(col: Vector4) {
        this._col2 = col;
    }

    set color3(col: Vector4) {
        this._col3 = col;
    }
}