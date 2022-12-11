import { ShaderMaterial, Vector4 } from "three";
import { BaseLayer } from "../BaseLayer";
import CloudShader from "./CloudShader"

export class CloudLayer extends BaseLayer {
    private _color = new Vector4(0.882353, 0.94902, 1, 1);
    private _color2 = new Vector4(0.752941, 0.890196, 1, 1);
    private _color3 = new Vector4(0.368627, 0.439216, 0.647059, 1);
    private _color4 = new Vector4(0.25098, 0.286275, 0.45098, 1);
    private _cloudCover = 0.546;
    private _stretch = 2.5

    constructor() {
        super();
        const uniforms = {
            base_color: { value: this._color },
            outline_color: { value: this._color2 },
            shadow_base_color: { value: this._color3 },
            shadow_outline_color: { value: this._color4 },
            cloud_cover: { value: this._cloudCover },
            stretch: { value: this._stretch },
        }
        this.setShaderMaterial(uniforms, CloudShader);
    }

    public update(delta: number): void {
        super.update(delta);
        const mat = this.material as ShaderMaterial;
        mat.uniforms.base_color.value = this._color;
        mat.uniforms.outline_color.value = this._color2;
        mat.uniforms.shadow_base_color.value = this._color3;
        mat.uniforms.shadow_outline_color.value = this._color4;
        mat.uniforms.cloud_cover.value = this._cloudCover;
        mat.uniforms.stretch.value = this._stretch;

    }

    public get color(): Vector4 {
        return this._color;
    }

    public set color(value: Vector4) {
        this._color = value;
    }

    public get color2(): Vector4 {
        return this._color2;
    }

    public set color2(value: Vector4) {
        this._color2 = value;
    }

    public get color3(): Vector4 {
        return this._color3;
    }

    public set color3(value: Vector4) {
        this._color3 = value;
    }

    public get color4(): Vector4 {
        return this._color4;
    }

    public set color4(value: Vector4) {
        this._color4 = value;
    }

    public get cloudCover(): number {
        return this._cloudCover;
    }

    public set cloudCover(value: number) {
        this._cloudCover = value;
    }

    public get stretch(): number {
        return this._stretch;
    }

    public set stretch(value: number) {
        this._stretch = value;
    }
}