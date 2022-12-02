import { BufferGeometry, Mesh, PlaneGeometry, ShaderMaterial, UniformsUtils, Vector2 } from "three";
import { randomFloat } from "../Common/Utils";
import vertexShader from "../Common/Shaders/Vert"

export class BaseLayer extends Mesh
{
    private _pixelResolution = 100;
    private _light_origin = new Vector2(0.39, 0.7);
    private _time_speed = 0.1;
    private _rotation = 0.0;
    private _lightIntensity = 0.1;
    private _seed = randomFloat();
    private _time = 0.0;
    private _size = Math.random() * 5;
    private _dither_size = 2.0;
    
    constructor(geometry: BufferGeometry = new PlaneGeometry(1,1), material: ShaderMaterial = new ShaderMaterial())
    {
        super(geometry,material);
    }

    public setShaderMaterial(uniforms: any, fragmentShader: string): void
    {
        if(Array.isArray(this.material))
        {
            for (let i = 0; i < this.material.length; i++) 
            {
                this.material[i].dispose();
            }
        }
        else
        {
            this.material.dispose();
        }
        const baseUniforms = {
            "pixels": {value: this._pixelResolution},
            "light_origin": {value: this._light_origin},
            "time_speed": {value: this._time_speed},
            "lightIntensity": {value: this._lightIntensity},
            "seed": {value: this._seed},
            "time": {value: this._time},
            "rotation": {value: this._rotation},
            "size": {value: this._size},
            "dither_size": {value: this._dither_size}
        }
        const finalUniforms = UniformsUtils.merge([baseUniforms, uniforms]);
        this.material = new ShaderMaterial({
            uniforms:finalUniforms,
            transparent: true,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        })
    }

    public disposeLayer(): void
    {
        this.geometry.dispose();
        if(Array.isArray(this.material))
        {
            for (let i = 0; i < this.material.length; i++) 
            {
                this.material[i].dispose();
            }
        }
        else
        {
            this.material.dispose();
        }
    }

    public update(delta: number): void
    {
        // currently only single shader material is supported
        if(!Array.isArray(this.material))
        {
            const mat = this.material as ShaderMaterial;
            mat.uniforms.time.value = delta;
            mat.uniforms.rotation.value = this._rotation;
            mat.uniforms.lightIntensity.value = this.lightIntensity;
            mat.uniforms.time_speed.value = this._time_speed;
            mat.uniforms.light_origin.value = this._light_origin;
            mat.uniforms.pixels.value = this._pixelResolution;
            mat.uniforms.size.value = this._size;
            mat.uniforms.dither_size.value = this._dither_size;
        }
    }

    public get lightIntensity(): number
    {
        return this._lightIntensity;
    }

    public set lightIntensity(value: number)
    {
        this._lightIntensity = value;
    }

    public get rotationVertical(): number 
    {
        return this._rotation;
    }
    public set rotationVertical(value: number) 
    {
        this._rotation = value;
    }

    public get timeSpeed(): number 
    {
        return this._time_speed;
    }

    public set timeSpeed(value: number) 
    {
        this._time_speed = value;
    }

    public get lightOrigin(): Vector2 {
        return this._light_origin;
    }

    public set lightOrigin(value: Vector2) {
        this._light_origin = value;
    }

    public get pixelResolution(): number {
        return this._pixelResolution;
    }

    public set pixelResolution(value: number) {
        this._pixelResolution = value;
    }

    public get size(): number {
        return this._size;
    }
    public set size(value: number) {
        this._size = value;
    }

    public get dither_size(): number {
        return this._dither_size;
    }

    public set dither_size(value: number) {
        this._dither_size = value;
    }
}