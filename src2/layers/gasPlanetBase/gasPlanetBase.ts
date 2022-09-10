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
                time: { value: 0.0 }
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