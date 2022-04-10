import { Vector4 } from "three";
import { createBasePlanet } from "../Layers/basePlanet";
import { createCraterLayer } from "../Layers/craterLayer";
import { createRiverLayer } from "../Layers/riversLayer";
import { createGroup } from "../Three";

export const createLavaPlanet = () => {
    const colorPaletteBase = [
        new Vector4(0.560784, 0.301961, 0.341176, 1),
        new Vector4(0.321569, 0.2, 0.247059, 1),
        new Vector4(0.239216, 0.160784, 0.211765, 1)
    ]

    const colorPaletteCrater = [
        new Vector4(0.321569, 0.2, 0.247059, 1),
        new Vector4(0.239216, 0.160784, 0.211765, 1),
    ]
    const colorPaletteRiver = [
        new Vector4(1, 0.537255, 0.2, 1),
        new Vector4(0.901961, 0.270588, 0.223529, 1),
        new Vector4(0.678431, 0.184314, 0.270588, 1)
    ]

    const planetGroup = createGroup()

    const basePlanet = createBasePlanet(undefined, undefined, colorPaletteBase)
    const craterLayer = createCraterLayer(undefined, colorPaletteCrater)
    const riverLayer = createRiverLayer(undefined, undefined, undefined, colorPaletteRiver);
    planetGroup.add(basePlanet);
    planetGroup.add(craterLayer)
    planetGroup.add(riverLayer)
    return planetGroup
}