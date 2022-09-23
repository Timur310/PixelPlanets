import { BufferGeometry, Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector4 } from "three";
import { mulberry32 } from "../../Utils/math";
import fragment from './frag.frag';
import vertex from './vert.vert';

export class LakeLayer {
    private _color: Vector4;
    private _color2: Vector4;
    private _color3: Vector4;

    private _geometry: BufferGeometry;
    private _material: ShaderMaterial;
    private _mesh: Mesh;

    private _lightPos: Vector2;
    private _rotationSpeed: number;
    private _lakes: number;

    constructor() {
        this._color = new Vector4(79 / 255, 164 / 255, 184 / 255, 1);
        this._color2 = new Vector4(76 / 255, 104 / 255, 133 / 255, 1);
        this._color3 = new Vector4(58 / 255, 63 / 255, 94 / 255, 1);

        this._lightPos = new Vector2(0.39, 0.7);
        this._lakes = 0.6;
        this._rotationSpeed = 0.1;

        this._geometry = new PlaneGeometry(1,1);
        this._material = new ShaderMaterial({
            uniforms : {
                light_origin: { value: this._lightPos },
                seed: { value: mulberry32() },
                time_speed: { value: this._rotationSpeed },
                lake_cutoff: { value: this._lakes },
                rotation: { value: Math.random() },
                color1: { value: this._color },
                color2: { value: this._color2 },
                color3: { value: this._color3 },
                time: { value: 0.0 }
            },
            fragmentShader: fragment,
            vertexShader: vertex,
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

    get color(): Vector4 {
        return this._color
    }

    set color(value: Vector4) {
        this._color = value;
    }

    get color2(): Vector4 {
        return this._color2
    }

    set color2(value: Vector4) {
        this._color2 = value;
    }

    get color3(): Vector4 {
        return this._color3
    }
    
    set color3(value: Vector4) {
        this._color3 = value;
    }

    get lightPos(): Vector2 {
        return this._lightPos;
    }

    set lightPos(value: Vector2) {
        this._lightPos = value;
    }

    get rotationSpeed(): number {
        return this._rotationSpeed;
    }

    set rotationSpeed(value: number) {
        this._rotationSpeed = value;
    }

    get lakes(): number {
        return this._lakes;
    }

    set lakes(value: number) {
        this._lakes = value;
    }

    get mesh(): Mesh {
        return this._mesh;
    }
}