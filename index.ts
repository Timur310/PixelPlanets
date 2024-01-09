import { Clock, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";
import { Pane } from "tweakpane";
import { PlanetGenerator } from "./src2/PlanetGenerator";
import { Layer } from "./src2/layers/Layer";

let renderer: WebGLRenderer;
let camera: PerspectiveCamera;
let planets: Layer[][];
let scene: Scene;
let clock: Clock;
let delta = 0;

function onWindowResize(): void {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function loop(): void {
    requestAnimationFrame(loop);
    
    delta = clock.getElapsedTime();
    
    planets.forEach(planet => {
        planet.forEach(layer => {
            layer.material.uniforms.time.value = delta;
        })
    })

    renderer.render(scene, camera);
}

function init(): void {
    // add listeners
    window.addEventListener('resize', onWindowResize, false);

    // init threejs scene
    scene = new Scene();
    camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new WebGLRenderer();
    planets = [];
    clock = new Clock()

    // basic settings
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera.position.z = -1;
    camera.lookAt(new Vector3(0,0,0));

    // init planet generator
    const generator = new PlanetGenerator();
    const planet = generator.generate();
    
    // add layers to scene and planet to list
    // also set mesh to face camera (viewer purpose only)
    planets.push(planet)
    planet.forEach(layer => {
        layer.mesh.lookAt(camera.position);
        scene.add(layer.mesh);
    })


    // init tweakpane
    const pane = new Pane();

    // start loop
    loop();
}

window.onload = init;