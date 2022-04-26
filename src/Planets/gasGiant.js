import { Group } from "three";
import { createBaseGasPlanet } from "../Layers/baseGasPlanet.js";
import { createGasPLayer } from "../Layers/gasLayer.js";

export const createGasGiant = () =>
{
    const gasGiantGroup = new Group()

    const basePlanet = createBaseGasPlanet()
    const gasLayer = createGasPLayer()
    gasGiantGroup.add(basePlanet)
    gasGiantGroup.add(gasLayer)

    return gasGiantGroup
}