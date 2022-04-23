import { flip } from "./src/utils"

export const settings = {
    seedValue: 1.0,
    planetTypes:"No atmosphere",
    planetOptions: [
        "No atmosphere",
        "Ice Planet",
        "Gas giant 1",
        "Gas giant 2",
        "Asteroid",
        "Star",
        "Lava Planet",
        "Dry Planet",
        "Earth Planet"
    ],
    seed: () => {
        settings.seedValue = flip() ? Math.random() * 10 : Math.random() * 100 
    }
}