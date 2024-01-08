import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { Pane } from "tweakpane";

let renderer: WebGLRenderer;
let camera: PerspectiveCamera;
let scene: Scene;

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
    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // init tweakpane
    const pane = new Pane();

    // start loop
    loop();
}

window.onload = init;