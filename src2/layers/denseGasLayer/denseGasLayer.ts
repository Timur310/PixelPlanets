import { BufferGeometry, PlaneGeometry, ShaderMaterial, Texture } from "three";
import vertex from "./vert.vert";
import fragment from "./frag.frag";
import { mulberry32 } from "../../Utils/math";

export class DenseGasLayer {
    private _geometry: BufferGeometry;
    private _material: ShaderMaterial;

    private _rotationSpeed: number

    private _texture1: Texture;
    private _texture2: Texture;

    private _lightPos: number;

    constructor() {

        this._geometry = new PlaneGeometry(1, 1);
        this._material = new ShaderMaterial({
            uniforms: {
                colorscheme: { value: this._texture1 },
                dark_colorscheme: { value: this._texture2 },
                light_origin: { value: this._lightPos },
                time_speed: { value: this._rotationSpeed },
                rotation: { value: Math.random() },
                seed: { value: mulberry32() },
                time: { value: 0.0 }
            },
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true,
        });
    }

}