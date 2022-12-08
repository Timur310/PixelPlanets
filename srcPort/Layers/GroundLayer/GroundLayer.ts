import { ShaderMaterial, Vector4 } from "three";
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
            color1: { value: this._color},
            color2: { value: this._color2},
            color3: { value: this._color3},
        }
        this.setShaderMaterial(uniforms,GroundShader);
    }

    public update(delta: number): void 
    {
        super.update(delta);
        const mat = this.material as ShaderMaterial;
        mat.uniforms.color1.value = this._color;
        mat.uniforms.color2.value = this._color2;
        mat.uniforms.color3.value = this._color3;

    }

    public get color(): Vector4 
    {
        return this._color;
    }

    public set color(value: Vector4) 
    {
        this._color = value;
    }

    public get color2(): Vector4 
    {
        return this._color2;
    }

    public set color2(value: Vector4) 
    {
        this._color2 = value;
    }

    public get color3(): Vector4 
    {
        return this._color3;
    }

    public set color3(value: Vector4) 
    {
        this._color3 = value;
    }
}