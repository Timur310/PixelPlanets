import { Vector4 } from "three"
import { Group } from "three"
import { createBasePlanet } from "../Layers/basePlanet"
import { createCloudLayer } from "../Layers/cloudLayer"
import { createLakeLayer } from "../Layers/lakeLayer"

export const createIcePlanet = () => {
    const icePlanet = new Group()
    baseColorPalette = [
        new Vector4(250/255,255/255,255/255,1),
        new Vector4(199/255,212/255,255/255,1),
        new Vector4(146/255,143/255,184/255,1)
    ]
    const basePlanet = createBasePlanet(undefined,undefined,baseColorPalette)
    const lakeLayer = createLakeLayer()
    const cloudLayer = createCloudLayer()
    icePlanet.add(basePlanet)
    icePlanet.add(lakeLayer)
    icePlanet.add(cloudLayer)

    return icePlanet;
}