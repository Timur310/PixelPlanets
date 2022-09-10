import { BufferGeometry, Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector4 } from "three";
import fragment from "./frag.frag"
import vertex from "./vert.vert"

export class GasPlanetBase {
    private _lightPos: Vector2;
    private _cloudCover: number;
    private _stretch: number;
    private _cloudCurve: number;
    private _rotationSpeed: number;
    private _rotation: number;
    private _color: Vector4;
    private _color2: Vector4;
    private _color3: Vector4;
    private _color4: Vector4;
    private _geometry: BufferGeometry;
    private _material: ShaderMaterial;
    private _mesh: Mesh;
    constructor() {

        this._geometry = new PlaneGeometry(1, 1);
        this._material = new ShaderMaterial({
            uniforms: {
                base_color: { value: this._color },
                outline_color: { value: this._color2 },
                shadow_base_color: { value: this._color3 },
                shadow_outline_color: { value: this._color4 },
                cloud_cover: { value: this._cloudCover },
                stretch: { value: this._stretch },
                cloud_curve: { value: this._cloudCurve },
                time_speed: { value: this._rotationSpeed },
                rotation: { value: this._rotation },
                light_origin: { value: this._lightPos },
                seed: { value: 1.0 },
                time: { value: 0.0 }
            },
            vertexShader: fragment,
            fragmentShader: vertex,
            transparent: true,
        });
    }
}