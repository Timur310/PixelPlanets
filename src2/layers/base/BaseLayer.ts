import { BufferGeometry, Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector4 } from "three"
import { FragmentShader } from "./FragmentShader";
import { vertexShader } from "../../VertexShader";

export class BaseLayer {
    private _colorPalette: Vector4[];
    private _geometry: BufferGeometry;
    private _material: ShaderMaterial;
    private _lightIntensity: number;
    private _lightPos: Vector2;
    private _rotationSpeed: number;
    private _rotation: number;
    private _seed: number;
    private _mesh: Mesh;

    constructor(colorPalette?: Vector4[], lightIntensity?: number, lightPos?: Vector2, rotationSpeed?: number, rotation?: number) {
        this._colorPalette = colorPalette ? colorPalette : [
            new Vector4(155 / 255, 158 / 255, 184 / 255, 1),
            new Vector4(71 / 255, 97 / 255, 124 / 255, 1),
            new Vector4(53 / 255, 57 / 255, 85 / 255, 1)
        ];
        this._lightIntensity = lightIntensity || 0.1;
        this._lightPos = lightPos || new Vector2(0.39, 0.7);
        this._rotationSpeed = rotationSpeed || 0.1;
        this._rotation = rotation || 0;
        this._seed = 123 // craete a seed generator
        this._geometry = new PlaneGeometry(1, 1);
        this._material = new ShaderMaterial({
            uniforms: {
                pixels: { value: 100.0 },
                color1: { value: this._colorPalette[0] },
                color2: { value: this._colorPalette[1] },
                color3: { value: this._colorPalette[2] },
                lightIntensity: { value: this._lightIntensity },
                light_origin: { value: this._lightPos },
                time_speed: { value: this._rotationSpeed },
                rotation: { value: this._rotation },
                seed: { value: this._seed },
                time: { value: 0.0 }
            },
            vertexShader: vertexShader,
            fragmentShader: FragmentShader,
            transparent: true,
        });
        this._mesh = new Mesh(this._geometry, this._material);
    }

    public get mesh(): Mesh {
        return this._mesh;
    }

}