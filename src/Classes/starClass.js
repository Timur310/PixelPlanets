import { createStar } from "../Layers/star";
import { createStarFlareLayer } from "../Layers/starFlareLayer";
import { createStarBlobLayer } from "../Layers/starBlobLayer";
import { Group } from "three";

export class StarPlanet {

    #Star;
    #temperature;

    constructor(starColor) {
        this.#Star = this.#createStar(starColor)
    }

    #createStar(color) {
        let base;
        let flare;
        let blob;
        const starGroup = new Group()
        switch (color) {
            case "blue":
                base = createStar(undefined, undefined, undefined, undefined, "blue");
                flare = createStarFlareLayer(undefined, undefined, undefined, "blue")
                blob = createStarBlobLayer()
                
                flare.position.z = 0.01
                flare.scale.set(1.2,1.2)
                blob.position.z = -0.01
                blob.scale.set(1.9,1.9)
                
                starGroup.add(base)
                starGroup.add(flare)
                starGroup.add(blob)
                
                this.#temperature = 249726

                return starGroup
            case "white":
                base = createStar(undefined, undefined, undefined, undefined, "white");
                flare = createStarFlareLayer(undefined, undefined, undefined, "white")
                blob = createStarBlobLayer()

                flare.position.z = 0.01
                flare.scale.set(1.2,1.2)
                blob.position.z = -0.01
                blob.scale.set(1.9,1.9)

                starGroup.add(base)
                starGroup.add(flare)
                starGroup.add(blob)

                this.#temperature = 99726

                return starGroup
            case "yellow":
                base = createStar(undefined, undefined, undefined, undefined, "yellow");
                flare = createStarFlareLayer(undefined, undefined, undefined, "yellow")
                blob = createStarBlobLayer()

                flare.position.z = 0.01
                flare.scale.set(1.2,1.2)
                blob.position.z = -0.01
                blob.scale.set(1.9,1.9)

                starGroup.add(base)
                starGroup.add(flare)
                starGroup.add(blob)

                this.#temperature = 5726

                return starGroup
            case "orange":
                base = createStar(undefined, undefined, undefined, undefined, "orange");
                flare = createStarFlareLayer(undefined, undefined, undefined, "orange")
                blob = createStarBlobLayer()

                flare.position.z = 0.01
                flare.scale.set(1.2,1.2)
                blob.position.z = -0.01
                blob.scale.set(1.9,1.9)

                starGroup.add(base)
                starGroup.add(flare)
                starGroup.add(blob)

                this.#temperature = 3726

                return starGroup
            case "red":
                base = createStar(undefined, undefined, undefined, undefined, "red");
                flare = createStarFlareLayer(undefined, undefined, undefined, "red")
                blob = createStarBlobLayer()

                flare.position.z = 0.01
                flare.scale.set(1.2,1.2)
                blob.position.z = -0.01
                blob.scale.set(1.9,1.9)

                starGroup.add(base)
                starGroup.add(flare)
                starGroup.add(blob)

                this.#temperature = 2726

                return starGroup
        }
    }

    update(time) {
        this.#Star.children.forEach(layer => {
            layer.material.uniforms["time"].value = time;
        });
    }

    getStar() {
        return this.#Star
    }

    getTemperature() {
        return this.#temperature
    }
}