import { Vector4 } from "three";
import { BaseLayer } from "../BaseLayer"
import LandShader from "./LandShader";

export class LandLayer extends BaseLayer
{
    private _color = new Vector4(0.784314, 0.831373, 0.364706, 1);
    private _color2 = new Vector4(0.388235, 0.670588, 0.247059, 1);
    private _color3 = new Vector4(0.184314, 0.341176, 0.32549, 1);
    private _color4 = new Vector4(0.156863, 0.207843, 0.25098, 1);
    private _landCutOff = 0.6;

    constructor()
    {
        super();
        const uniforms = {
            land_cutoff: { value: this._landCutOff },
            col1: { value: this._color },
            col2: { value: this._color2 },
            col3: { value: this._color3 },
            col4: { value: this._color4 },
        }
        this.setShaderMaterial(uniforms,LandShader);
    }
}