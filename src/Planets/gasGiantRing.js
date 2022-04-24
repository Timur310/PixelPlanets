import { Group } from "three";
import { createDenseGasPlanet } from "../Layers/denseGasLayer.js";
import { createRingLayer } from "../Layers/ringLayer.js";

export const createGasGiantRing = () =>
{
    const gasGiantGroup = new Group()

    const ring = createRingLayer()
    const gasPlanet = createDenseGasPlanet()
    ring.position.z = 0.01
    ring.scale.set(2.0,2.0)
    gasGiantGroup.add(gasPlanet)
    gasGiantGroup.add(ring)

    return gasGiantGroup
}