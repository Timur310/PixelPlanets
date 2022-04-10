import { Group } from "three";
import { createBaseGasPlanet } from "../Layers/baseGasPlanet";
import { createGasPLayer } from "../Layers/gasLayer";

export const createGasGiant = () =>
{
    const gasGiantGroup = new Group()

    const basePlanet = createBaseGasPlanet()
    const gasLayer = createGasPLayer()
    gasGiantGroup.add(basePlanet)
    gasGiantGroup.add(gasLayer)

    return gasGiantGroup
}