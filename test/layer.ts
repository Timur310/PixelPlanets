import * as THREE from "three"
import { Clock, HemisphereLight } from "three";
import { LandLayer } from "../srcPort/Layers/LandLayer/LandLayer";
import { CraterLayer } from "../srcPort/Layers/CraterLayer/CraterLayer";
import { GroundLayer } from "../srcPort/Layers/GroundLayer/GroundLayer";
import { CloudLayer } from "../srcPort/Layers/CloudLayer/CloudLayer";

const init = () => {
    const scene = new THREE.Scene();
    const clock = new Clock()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const layer = new GroundLayer()
    scene.add(layer)

    function animate() {
        const delta = clock.getElapsedTime()
        layer.update(delta)
        renderer.render(scene, camera);
        requestAnimationFrame(animate);

    }
    animate();
}

window.onload = init