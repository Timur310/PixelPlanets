import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

function init(): void {
    // init threejs scene
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

window.onload = init;