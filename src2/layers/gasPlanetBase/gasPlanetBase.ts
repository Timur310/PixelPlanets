import { BufferGeometry, Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector4 } from "three";
import { mulberry32 } from "../../Utils/math";
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

        this._lightPos = new Vector2(0.39, 0.7);
        this._cloudCover = 0.538;
        this._cloudCurve = 1.3;
        this._stretch = 1.0;
        this._rotation = 0.0;
        this.rotationSpeed = 0.1
        this._color = new Vector4(0.941176, 0.709804, 0.254902, 1);
        this._color2 = new Vector4(0.811765, 0.458824, 0.168627, 1);
        this._color3 = new Vector4(0.670588, 0.317647, 0.188235, 1);
        this._color4 = new Vector4(0.490196, 0.219608, 0.2, 1);

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
                seed: { value: mulberry32(Math.random()) },
                time: { value: 0.0 },
                pixels: { value: 100.0 }
            },
            vertexShader: fragment,
            fragmentShader: vertex,
            transparent: true,
        });
        this._mesh = new Mesh(this._geometry, this._material);
    }

    public dispose(): void {
        this._geometry.dispose()
        this._material.dispose()
        if(this._mesh.parent)
        {
            this._mesh.parent.remove(this._mesh)
        }
    }

    get color(): Vector4 {
        return this._color;
    }

    set color(value: Vector4) {
        this._color = value;
    }

    get color2(): Vector4 {
        return this._color;
    }

    set color2(value: Vector4) {
        this._color2 = value;
    }

    get color3(): Vector4 {
        return this._color;
    }

    set color3(value: Vector4) {
        this._color3 = value;
    }

    get color4(): Vector4 {
        return this._color;
    }

    set color4(value: Vector4) {
        this._color = value;
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

    get lightPos(): Vector2 {
        return this._lightPos;
    }

    set lightPos(value: Vector2) {
        this._lightPos = value;
    }

    get mesh(): Mesh {
        return this._mesh
    }

    get geometry(): BufferGeometry {
        return this._geometry
    }

    get material(): ShaderMaterial {
        return this._material
    }
}