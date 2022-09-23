import { BufferGeometry, Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector4 } from 'three';
import { mulberry32 } from '../../Utils/math';
import fragment from './frag.frag';
import vertex from './vert.vert';

export class GasLayer {
    private _color: Vector4;
    private _color2: Vector4;
    private _color3: Vector4;
    private _color4: Vector4;

    private _lightPos: Vector2;
    private _cloudCover: number;
    private _stretch: number;
    private _rotationSpeed: number;
    private _cloudCurve: number;

    private _geometry: BufferGeometry;
    private _material: ShaderMaterial;
    private _mesh: Mesh;

    constructor() {

        this._color = new Vector4(0.231373, 0.12549, 0.152941, 1);
        this._color2 = new Vector4(0.231373, 0.12549, 0.152941, 1);
        this._color3 = new Vector4(0.129412, 0.0941176, 0.105882, 1);
        this._color4 = new Vector4(0.129412, 0.0941176, 0.105882, 1);

        this._lightPos = new Vector2(0.39, 0.7);
        this._cloudCover = 0.538;
        this._stretch = 1.0;
        this._rotationSpeed = 0.1;
        this._cloudCurve = 1.3;

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
                rotation: { value: Math.random() },
                light_origin: { value: this._lightPos },
                seed: { value: mulberry32() },
                time: { value: 0.0 }
            },
            fragmentShader: fragment,
            vertexShader: vertex,
            transparent: true
        });

        this._mesh = new Mesh(this._geometry, this._material);
    }

    public dispose(): void {
        this._geometry.dispose()
        this._material.dispose()
        if (this._mesh.parent) {
            this._mesh.parent.remove(this._mesh)
        }
    }

    get cloudCurve(): number {
        return this._cloudCurve;
    }
    
    set cloudCurve(value: number) {
        this._cloudCurve = value;
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

    get cloudCover(): number {
        return this._cloudCover;
    }
    
    set cloudCover(value: number) {
        this._cloudCover = value;
    }

    get color(): Vector4 {
        return this._color;
    }

    set color(value: Vector4) {
        this._color = value;
    }

    get color2(): Vector4 {
        return this._color2;
    }

    set color2(value: Vector4) {
        this._color2 = value;
    }

    get color3(): Vector4 {
        return this._color3;
    }
    
    set color3(value: Vector4) {
        this._color3 = value;
    }

    get color4(): Vector4 {
        return this._color4;
    }
    
    set color4(value: Vector4) {
        this._color4 = value;
    }

    get mesh(): Mesh {
        return this._mesh;
    }
}