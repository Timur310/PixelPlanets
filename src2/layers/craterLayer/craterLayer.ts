import { BufferGeometry, Mesh, PlaneGeometry, ShaderMaterial, Vector, Vector2, Vector4 } from "three";
import { mulberry32 } from "../../Utils/math";
import fragment from "./frag.frag";
import vertex from "./vert.vert";

export class CraterLayer {

	private _lightPos: Vector;
	private _color: Vector4;
	private _color2: Vector4;
	private _rotationSpeed: number;
	private _rotation: number;
	
	private _geometry: BufferGeometry;
	private _material: ShaderMaterial;
	private _mesh: Mesh;

	constructor() {
		this._lightPos = new Vector2(0.39, 0.7);
		this._rotationSpeed = 0.1
		this._rotation = 0.0
		this._color =new Vector4(71 / 255, 97 / 255, 124 / 255, 1);
        this._color2 =new Vector4(53 / 255, 57 / 255, 85 / 255, 1);

		this._geometry = new PlaneGeometry(1, 1);
		this._material = new ShaderMaterial({
			uniforms: {
				color1: { value: this._color },
				color2: { value: this._color2 },
				light_origin: { value: this._lightPos },
				time_speed: { value: this._rotationSpeed },
				rotation: { value: this._rotation },
				seed: { value: mulberry32() },
				time: { value: 0.0 }
			},
			vertexShader: vertex,
			fragmentShader: fragment,
			// dont remember why depthtest was used, might look at it later if something is wrong
			//depthTest: true,
			transparent: true,
		});
		this._mesh = new Mesh(this._geometry, this._material);
	}

	public dispose(): void {
        this._geometry.dispose()
        this._material.dispose()
        if(this._mesh.parent)
        {
            this._mesh.parent.remove(this._mesh)
		}
    }

	get lightPos(): Vector {
		return this._lightPos;
	}
	
	set lightPos(value: Vector) {
		this._lightPos = value;
	}

	get color(): Vector4 {
		return this._color;
	}

	set color(value: Vector4) {
		this._color = value;
	}

	get color2(): Vector4 {
		return this._color2;
	}
	
	set color2(value: Vector4) {
		this._color2 = value;
	}

	get rotationSpeed(): number {
		return this._rotationSpeed;
	}

	set rotationSpeed(value: number) {
		this._rotationSpeed = value;
	}

	get rotation(): number {
		return this._rotation;
	}

	set rotation(value: number) {
		this._rotation = value;
	}

	get material(): ShaderMaterial {
		return this._material
	}

	get mesh(): Mesh {
		return this._mesh
	}

	get geometry(): BufferGeometry {
		return this._geometry
	}
}