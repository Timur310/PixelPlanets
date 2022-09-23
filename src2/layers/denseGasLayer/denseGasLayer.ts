import { BufferGeometry, Mesh, NearestFilter, PlaneGeometry, ShaderMaterial, Texture, TextureLoader, Vector2 } from "three";
import { mulberry32 } from "../../Utils/math";
import fragment from "./frag.frag";
import vertex from "./vert.vert";

export class DenseGasLayer {
    private _rotationSpeed: number;
    private _lightPos: Vector2;

    private _geometry: BufferGeometry;
    private _material: ShaderMaterial;

    private _mesh: Mesh;

    private _texture1: Texture;
    private _texture2: Texture;

    constructor() {

        this._lightPos = new Vector2(0.39, 0.7);
        this._rotationSpeed = 0.1;

        this._texture1 = new TextureLoader().load("./assets/palettes/palette_1.png");
        this._texture1.magFilter = NearestFilter
        this._texture1.minFilter = NearestFilter
    
        this._texture2 = new TextureLoader().load("./assets/palettes/palette_2.png");
        this._texture2.magFilter = NearestFilter
        this._texture2.minFilter = NearestFilter

        this._geometry = new PlaneGeometry(1, 1);
        this._material = new ShaderMaterial({
            uniforms: {
                colorscheme: { value: this._texture1 },
                dark_colorscheme: { value: this._texture2 },
                light_origin: { value: this._lightPos },
                time_speed: { value: this._rotationSpeed },
                rotation: { value: Math.random() },
                seed: { value: mulberry32() },
                time: { value: 0.0 }
            },
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true,
        });

        this._mesh = new Mesh(this._geometry, this._material);
    }

    public dispose(): void {
        this._geometry.dispose()
        this._material.dispose()
        if (this._mesh.parent) {
            this._mesh.parent.remove(this._mesh)
        }
    }

    get rotationSpeed(): number {
        return this._rotationSpeed;
    }

    set rotationSpeed(value: number) {
        this._rotationSpeed = value;
    }

    get lightPos(): Vector2 {
        return this._lightPos;
    }

    set lightPos(value: Vector2) {
        this._lightPos = value;
    }

    get mesh(): Mesh {
        return this._mesh;
    }

}