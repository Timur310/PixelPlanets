import { Vector4 } from "three";
import { Group } from "three"
import { createAtmosphereLayer } from "../Layers/atmosphereLayer.js";
import { createBasePlanet } from "../Layers/basePlanet.js";
import { createCloudLayer } from "../Layers/cloudLayer.js";
import { createlandMassLayer } from "../Layers/landMass.js";

export const createEarthPlanet = () => {
    const earth = new Group();
    const colors = [
        new Vector4(102 / 255, 176 / 255, 199 / 255, 1),
        new Vector4(102 / 255, 176 / 255, 199 / 255, 1),
        new Vector4(52 / 255, 65 / 255, 157 / 255, 1)
    ]

    const basePlanet = createBasePlanet(undefined,undefined,colors)
    const landmass = createlandMassLayer(undefined,undefined,undefined,undefined,undefined,0.5);
    const clouds = createCloudLayer()
    const atmosphere = createAtmosphereLayer()

    earth.add(basePlanet,landmass,clouds,atmosphere)
    return earth
}