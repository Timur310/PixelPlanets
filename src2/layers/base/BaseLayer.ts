import { Vector2, Vector4 } from "three";
import { Layer } from "../Layer";
import { FragmentShader } from "./FragmentShader";

export class BaseLayer extends Layer {
    private _colorPalette: Vector4[];

    constructor(colorPalette?: Vector4[], lightIntensity?: number, lightPos?: Vector2, rotationSpeed?: number, rotation?: number) {
        super(
            lightIntensity || 0.1,
            lightPos || new Vector2(0.39, 0.7),
            rotationSpeed || 0.1,
            rotation || 0
        );
        this._colorPalette = colorPalette ? colorPalette : [
            new Vector4(155 / 255, 158 / 255, 184 / 255, 1),
            new Vector4(71 / 255, 97 / 255, 124 / 255, 1),
            new Vector4(53 / 255, 57 / 255, 85 / 255, 1)
        ];
        this.extendMaterial();
    }

    private extendMaterial(): void {
        this.material.fragmentShader = FragmentShader;
        this.material.onBeforeCompile = shader => {
            shader.uniforms.color1 = { value: this._colorPalette[0] };
            shader.uniforms.color2 = { value: this._colorPalette[1] };
            shader.uniforms.color3 = { value: this._colorPalette[2] };
        }
    }
}