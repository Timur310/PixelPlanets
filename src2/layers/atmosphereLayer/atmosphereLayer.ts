import { PlaneGeometry, ShaderMaterial, Vector3, Vector4 } from "three";
import { Base } from "../Base/Base";
import fragment from "./frag.frag";
import vertex from "./vert.vert";

export class AtmopshereLayer extends Base {

    private _col: Vector4;
    private _col2: Vector4;
    private _col3: Vector4;

    constructor(color?: Vector3, color2?: Vector3, color3?: Vector3) {
        const mat = new ShaderMaterial({
            uniforms: {
                color: { value: color },
                color2: { value: color2 },
                color3: { value: color3 }
            },
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true,
        });
        super(new PlaneGeometry(1.02, 1.02), mat);
        this._col = color ? new Vector4(color.x, color.y, color.z, 0.25) : new Vector4(173 / 255, 216 / 255, 230 / 255, 0.25);
        this._col2 = color2 ? new Vector4(color2.x, color2.y, color2.z, 0.35) : new Vector4(0 / 255, 127 / 255, 255 / 255, 0.35);
        this._col3 = color3 ? new Vector4(color3.x, color3.y, color3.z, 0.45) : new Vector4(0 / 255, 0 / 255, 128 / 255, 0.45);
    }

    public dispose(): void {
        this.geometry.dispose();
        this.material.dispose()
        if(this.mesh.parent)
        {
            this.mesh.parent.remove(this.mesh)
        }
    }

    get color(): Vector4 {
        return this._col;
    }

    get color2(): Vector4 {
        return this._col2;
    }

    get color3(): Vector4 {
        return this._col3;
    }

    set color(col: Vector4) {
        this._col = col;
    }

    set color2(col: Vector4) {
        this._col2 = col;
    }

    set color3(col: Vector4) {
        this._col3 = col;
    }
}