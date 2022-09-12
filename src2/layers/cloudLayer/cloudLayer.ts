import { BufferGeometry, Mesh, PlaneGeometry, Shader, ShaderMaterial, Vector2, Vector4 } from "three";
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
    private _mesh: Mesh;

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
        this._mesh = new Mesh(this._geometry, this._material);
    }

    public dispose(): void {
        this._geometry.dispose()
        this._material.dispose()
        if (this._mesh.parent) {
            this._mesh.parent.remove(this._mesh)
        }
    }

    get lightPos(): Vector2 {
        return this._lightPos;
    }

    set lightPos(value: Vector2) {
        this._lightPos = value;
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

    get cloudCover(): number {
        return this._cloudCover;
    }
    
    set cloudCover(value: number) {
        this._cloudCover = value;
    }

    get stretch(): number {
        return this._stretch;
    }

    set stretch(value: number) {
        this._stretch = value;
    }

    get color4(): Vector4 {
        return this._color4;
    }

    set color4(value: Vector4) {
        this._color4 = value;
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
        return this._color;
    }

    set color(value: Vector4) {
        this._color = value;
    }

    get mesh(): Mesh {
        return this._mesh;
    }

    get material(): ShaderMaterial {
        return this._material;
    }

    get geometry(): BufferGeometry {
        return this._geometry;
    }

}