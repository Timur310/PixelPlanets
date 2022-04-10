import { Group } from "three"
import { createBasePlanet } from "../Layers/basePlanet"
import { createCraterLayer } from "../Layers/craterLayer"

export const createNoAtmospherePlanet = () => {
    const noAtmospherePlanet = new Group()

    const basePlanet = createBasePlanet()
    const craterLayer = createCraterLayer()

    noAtmospherePlanet.add(basePlanet)
    noAtmospherePlanet.add(craterLayer)

    return noAtmospherePlanet
}