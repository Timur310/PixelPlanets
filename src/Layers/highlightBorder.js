import { NearestFilter } from "three";
import { Mesh } from "three";
import { MeshBasicMaterial } from "three";
import { TextureLoader } from "three";
import { PlaneGeometry } from "three";

export const Border = () => {
    const texture = new TextureLoader().load("src/Images/highlight.png");
    texture.magFilter = NearestFilter
    texture.minFilter = NearestFilter
    const planetGeometry = new PlaneGeometry(1, 1);
    const material = new MeshBasicMaterial({
        map: texture
    })
    const mesh = new Mesh(planetGeometry,material)
    return mesh
}