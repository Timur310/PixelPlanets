import { createAsteroid } from "./Planets/asteroid";
import { createDryPlanet } from "./Planets/DryPlanet";
import { createEarthPlanet } from "./Planets/earthPlanet";
import { createGasGiant } from "./Planets/gasGiant";
import { createGasGiantRing } from "./Planets/gasGiantRing";
import { createIcePlanet } from "./Planets/icePlanet";
import { createLavaPlanet } from "./Planets/lavaPlanet";
import { createNoAtmospherePlanet } from "./Planets/noAtmosphere";
import { createStarPlanet } from "./Planets/starPlanet";

export function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function flip() {
    return Math.random() > 0.5
}

export function randomPointOnSphere() {
    var u = Math.random();
    var v = Math.random();
    var theta = 2 * Math.PI * u;
    var phi = Math.acos(2 * v - 1);
    var x = 0 + (1 * Math.sin(phi) * Math.cos(theta));
    var y = 0 + (1 * Math.sin(phi) * Math.sin(theta));
    var z = 0 + (1 * Math.cos(phi));
    return { "x": x, "y": y, "z": z };
}

export function generatePlanetByType(type) {
    switch (type) {
        case "No atmosphere":
            return createNoAtmospherePlanet()
        case "Ice Planet":
            return createIcePlanet()
        case "Gas giant 1":
            return createGasGiant()
        case "Gas giant 2":
            return createGasGiantRing()
        case "Asteroid":
            return createAsteroid()
        case "Star":
            return createStarPlanet()
        case "Lava Planet":
            return createLavaPlanet()
        case "Dry Planet":
            return createDryPlanet()
        case "Earth Planet":
            return createEarthPlanet()
    }
}