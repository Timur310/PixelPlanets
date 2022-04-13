import { Group, Vector2 } from "three";
import { createDryPlanet } from "./Planets/DryPlanet";
import { createGasGiant } from "./Planets/gasGiant";
import { createGasGiantRing } from "./Planets/gasGiantRing";
import { createIcePlanet } from "./Planets/icePlanet";
import { createLavaPlanet } from "./Planets/lavaPlanet";
import { createNoAtmospherePlanet } from "./Planets/noAtmosphere";
import { createStarPlanet } from "./Planets/starPlanet";
import { rand } from "./utils";

function generateRandomPlanet() {
    const planets = [
        "No atmosphere",
        "Ice Planet",
        "Gas giant 1",
        "Gas giant 2",
        "Lava Planet",
        "Dry Planet"
    ]
    const randomPlanet = planets[Math.floor(Math.random() * planets.length)]
    switch (randomPlanet) {
        case "No atmosphere":
            return createNoAtmospherePlanet()
        case "Ice Planet":
            return createIcePlanet()
        case "Gas giant 1":
            return createGasGiant()
        case "Gas giant 2":
            return createGasGiantRing()
        case "Lava Planet":
            return createLavaPlanet()
        case "Dry Planet":
            return createDryPlanet()
    }
}

export function createSolarSystem() {
    const planetGroup = new Group()

    const solarCenter = new Vector2(0,0)
    const solarRadius = 1
    const numPlanet = rand(2, 6)
    const slice = 2 * Math.PI / 10;

    const StarPlanet = createStarPlanet()
    StarPlanet.position.set(solarCenter.x,solarCenter.y)
    planetGroup.add(StarPlanet)

    for (let i = 0; i < numPlanet; i++) {
        const planet = generateRandomPlanet()
        const angle = slice * i
        const x = solarCenter.x + solarRadius * Math.cos(angle)
        const y = solarCenter.y + solarRadius * Math.sin(angle)
        planet.position.set(x,0,y);
        planet.scale.set(0.1,0.1)
        planetGroup.add(planet)
    }
    return planetGroup
}