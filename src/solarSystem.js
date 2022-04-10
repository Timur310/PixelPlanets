import { Group } from "three";
import { createIcePlanet } from "./Planets/icePlanet";
import { flip, rand } from "./utils";

export function createSolarSystem() {
    const solarGroup = new Group()

    const numPlanet = rand(1,1)

    for (let i = 0; i < numPlanet; i++) {
        let planet = createIcePlanet()
        
        //position planets randomly
        planet.position.x += i + Math.random()*10
        planet.position.z = flip() ?  -Math.random() : Math.random()
        solarGroup.add(planet)
    }

    return solarGroup
}