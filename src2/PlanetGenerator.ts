import { Layer } from "./layers/Layer";
import { BaseLayer } from "./layers/base/BaseLayer";

export class PlanetGenerator {
    constructor() { }

    public generate(): Layer[] {
        const baseLayer = new BaseLayer();
        return [baseLayer];
    }
}