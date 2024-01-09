import { AmbientLight, Group, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { Pane } from "tweakpane";
import { PlanetGenerator } from "./src2/PlanetGenerator";

let renderer: WebGLRenderer;
let camera: PerspectiveCamera;
let scene: Scene;
let planetGroup: Group;

function onWindowResize(): void {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function loop(): void {
    requestAnimationFrame(loop);
    renderer.render(scene, camera);
}

function init(): void {
    // add listeners
    window.addEventListener('resize', onWindowResize, false);

    // init threejs scene
    scene = new Scene();
    camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    planetGroup = new Group();
    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = -1;
    planetGroup.lookAt(camera.position)
    camera.lookAt(planetGroup.position)

    // init planet generator
    const generator = new PlanetGenerator();
    const planet = generator.generate();
    
    // add planets
    planetGroup.add(planet);
    scene.add(planetGroup);

    // init tweakpane
    const pane = new Pane();

    // start loop
    loop();
}

window.onload = init;