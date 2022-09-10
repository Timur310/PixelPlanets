import { BufferGeometry, Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector4 } from "three";
import { mulberry32 } from "../../Utils/math";
import fragment from "./frag.frag"
import vertex from "./vert.vert"

export class BaseLayer {
    private _lightPos: Vector2;
    private _lightIntensity: number;
    private _color: Vector4;
    private _color2: Vector4;
    private _color3: Vector4;
    private _rotationSpeed: number;
    private _rotation: number;
    private _geometry: BufferGeometry;
    private _material: ShaderMaterial;
    private _mesh: Mesh;

    constructor(color?: Vector4, color2?: Vector4, color3?: Vector4, lightPos?: Vector2, lightIntensity?: number) {
        this._geometry = new PlaneGeometry(1, 1);
        this._color = color ? color : new Vector4(155 / 255, 158 / 255, 184 / 255, 1);
        this._color2 = color2 ? color2 : new Vector4(71 / 255, 97 / 255, 124 / 255, 1);
        this._color3 = color3 ? color3 : new Vector4(53 / 255, 57 / 255, 85 / 255, 1);
        this._material = new ShaderMaterial({
            uniforms: {
                pixels: { value: 100.0 },
                color1: { value: this._color },
                color2: { value: this._color2 },
                color3: { value: this._color3 },
                lightIntensity: { value: lightIntensity ? lightIntensity : 0.1 },
                light_origin: { value: lightPos ? lightPos : new Vector2(0.39, 0.7) },
                time_speed: { value: 0.1 },
                rotation: { value: 0.0 },
                seed: { value: mulberry32(Math.random()) },
                time: { value: 0.0 }
            },
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true,
        });
        this._mesh = new Mesh(this._geometry, this._material);
    }

    public dispose(): void {
        this._geometry.dispose()
        this._material.dispose()
    }

    get mesh(): Mesh {
        return this._mesh
    }

    get color3(): Vector4 {
        return this._color3;
    }

    set color3(value: Vector4) {
        this._color3 = value;
    }

    get color2(): Vector4 {
        return this._color2;
    }

    set color2(value: Vector4) {
        this._color2 = value;
    }

    get color(): Vector4 {
        return this._color
    }

    set color(value: Vector4) {
        this._color = value;
    }

    get lightIntensity(): number {
        return this._lightIntensity;
    }

    set lightIntensity(value: number) {
        this._lightIntensity = value;
    }

    get material(): ShaderMaterial {
        return this._material;
    }

    get geometry(): BufferGeometry {
        return this._geometry;
    }

    get rotation(): number {
        return this._rotation;
    }

    set rotation(value: number) {
        this._rotation = value;
    }

    get rotationSpeed(): number {
        return this._rotationSpeed;
    }

    set rotationSpeed(value: number) {
        this._rotationSpeed = value;
    }

    get lightPos(): Vector2 {
        return this._lightPos;
    }

    set lightPos(value: Vector2) {
        this._lightPos = value;
    }
}