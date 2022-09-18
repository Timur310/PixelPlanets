import { BufferGeometry, PlaneGeometry, ShaderMaterial, Texture } from "three";
import vertex from "./vert.vert";
import fragment from "./frag.frag";

export class DenseGasLayer {
    private _geometry: BufferGeometry;
    private _material: ShaderMaterial;

    private _texture1: Texture;
    private _texture2: Texture;

    private _lightPos: number;

    constructor() {

        this._geometry = new PlaneGeometry(1, 1);
        this._material = new ShaderMaterial({
            uniforms: {
                colorscheme: { value: this._texture1 },
                dark_colorscheme: { value: this._texture2 },
                pixels: { value: 100.0 },
                light_origin: { value: this._lightPos },
                time_speed: { value: rotationSpeed },
                rotation: { value: Math.random() },
                seed: { value: flip() ? Math.random() * 10 : Math.random() * 100 },
                time: { value: 0.0 }
            },
            vertexShader: vertexShader(),
            fragmentShader: fragmentShader(),
            transparent: true,
        });
    }

}