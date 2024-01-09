import { Mesh, MeshBasicMaterial, PlaneGeometry } from "three";
import { BaseLayer } from "./layers/base/BaseLayer";

export class PlanetGenerator {
    constructor() { }

    public generate(): Mesh {
        const baseLayer = new BaseLayer();
        return baseLayer.mesh;
    }
}