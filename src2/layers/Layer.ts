import { BufferGeometry, ShaderMaterial, Vector2, Mesh, Vector4, PlaneGeometry } from "three";
import { vertexShader } from "../VertexShader";

export abstract class Layer {
    private _geometry: BufferGeometry;
    private _material: ShaderMaterial;
    private _lightIntensity: number;
    private _lightPos: Vector2;
    private _rotationSpeed: number;
    private _rotation: number;
    private _seed: number;
    private _mesh: Mesh;

    constructor(lightIntensity: number, lightPos: Vector2, rotationSpeed: number, rotation: number) {
        this._lightIntensity = lightIntensity;
        this._lightPos = lightPos;
        this._rotationSpeed = rotationSpeed;
        this._rotation = rotation;
        this._seed = 123 // craete a seed generator
        this._geometry = new PlaneGeometry(1, 1);
        this._material = new ShaderMaterial({
            uniforms: {
                pixels: { value: 100.0 },
                lightIntensity: { value: this._lightIntensity },
                light_origin: { value: this._lightPos },
                time_speed: { value: this._rotationSpeed },
                rotation: { value: this._rotation },
                seed: { value: this._seed },
                time: { value: 0.0 }
            },
            vertexShader: vertexShader,
            transparent: true,
        });
        this._mesh = new Mesh(this._geometry, this._material);
    }

    public get material(): ShaderMaterial {
        return this._material;
    }

    public get mesh(): Mesh {
        return this._mesh;
    }
}