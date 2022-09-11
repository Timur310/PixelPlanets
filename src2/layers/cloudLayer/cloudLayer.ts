import { BufferGeometry, PlaneGeometry, ShaderMaterial, Vector2, Vector4 } from "three";
import { mulberry32 } from "../../Utils/math";
import fragment from "./frag.frag";
import vertex from "./vert.vert";

export class CloudLayer {
    private _lightPos: Vector2;
    private _rotation: number;
    private _rotationSpeed: number;
    private _cloudCover: number;
    private _stretch: number;

    private _color: Vector4;
    private _color2: Vector4;
    private _color3: Vector4;
    private _color4: Vector4;

    private _geometry: BufferGeometry;
    private _material: ShaderMaterial;

    constructor() {
        this._color = new Vector4(0.882353, 0.94902, 1, 1);
        this._color2 = new Vector4(0.752941, 0.890196, 1, 1);
        this._color3 = new Vector4(0.368627, 0.439216, 0.647059, 1);
        this._color4 = new Vector4(0.25098, 0.286275, 0.45098, 1);

        this._lightPos = new Vector2(0.39, 0.7);
        this._rotation = 0.0;
        this._rotationSpeed = 0.1;
        this._cloudCover = 0.546;
        this._stretch = 2.5;

        this._geometry = new PlaneGeometry(1, 1);
        this._material = new ShaderMaterial({
            uniforms: {
                light_origin: { value: this._lightPos },
                pixels: { value: 100.0 },
                seed: { value: mulberry32(Math.random()) },
                time_speed: { value: this._rotationSpeed },
                base_color: { value: this._color },
                outline_color: { value: this._color2 },
                shadow_base_color: { value: this._color3 },
                shadow_outline_color: { value: this._color4 },
                cloud_cover: { value: this._cloudCover },
                rotation: { value: this._rotation },
                stretch: { value: this._stretch },
                time: { value: 0.0 }
            },
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true
        })
    }

}