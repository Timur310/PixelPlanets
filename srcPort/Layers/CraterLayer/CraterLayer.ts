import { Vector4 } from "three";
import { BaseLayer } from "../BaseLayer";
import CraterShader from "./CraterSader"

export class CraterLayer extends BaseLayer
{
    private _color = new Vector4(71 / 255, 97 / 255, 124 / 255, 1);
    private _color2 = new Vector4(53 / 255, 57 / 255, 85 / 255, 1);
    
    constructor()
    {
        super();
        const uniforms = 
        {
            color1: { value: this._color },
            color2: { value: this._color2 },
        }
        this.setShaderMaterial(uniforms,CraterShader);
    }
}