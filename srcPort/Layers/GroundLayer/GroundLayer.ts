import { Vector4 } from "three";
import { BaseLayer } from "../BaseLayer";
import GroundShader from "./GroundShader"

export class GroundLayer extends BaseLayer
{
    private _color = new Vector4(155 / 255, 158 / 255, 184 / 255, 1);
    private _color2 = new Vector4(71 / 255, 97 / 255, 124 / 255, 1);
    private _color3 = new Vector4(53 / 255, 57 / 255, 85 / 255, 1);

    constructor()
    {
        super();
        const uniforms = 
        {
            pixels: {value: 100.0},
            color1: { value: this._color},
            color2: { value: this._color2},
            color3: { value: this._color3},
        }
        this.setShaderMaterial(uniforms,GroundShader);
    }
}