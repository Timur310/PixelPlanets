import { BufferGeometry, Mesh, ShaderMaterial, Vector2, Vector4 } from "three";

export class LandMass {
    private _color: Vector4;
    private _color2: Vector4;
    private _color3: Vector4;
    private _color4: Vector4;

    private _lightPos: Vector2;
    private _rotationSpeed: number;
    private _land: number;

    private _geometry: BufferGeometry;
    private _material: ShaderMaterial;
    private _mesh: Mesh;

    constructor() {
        this._color = new Vector4(0.784314, 0.831373, 0.364706, 1);
        this._color2 = new Vector4(0.388235, 0.670588, 0.247059, 1);
        this._color3 = new Vector4(0.184314, 0.341176, 0.32549, 1);
        this._color4 = new Vector4(0.156863, 0.207843, 0.25098, 1);

        this._lightPos = new Vector2(0.39, 0.7);
        this._rotationSpeed = 0.1;
        this._land = 0.6
    }
}