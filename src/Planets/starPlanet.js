import { Group } from "three"
import { createStar } from "../Layers/star"
import { createStarBlobLayer } from "../Layers/starBlobLayer"
import { createStarFlareLayer } from "../Layers/starFlareLayer"

export const createStarPlanet = () => {
    const StarPlanet = new Group()

    const basePlanet = createStar()
    const starFlareLayer = createStarFlareLayer()
    const blobLayer = createStarBlobLayer()

    starFlareLayer.position.z = 0.01
    starFlareLayer.scale.set(1.2,1.2)
    blobLayer.position.z = -0.01
    blobLayer.scale.set(1.9,1.9)

    StarPlanet.add(basePlanet)
    StarPlanet.add(starFlareLayer)
    StarPlanet.add(blobLayer)

    return StarPlanet
}