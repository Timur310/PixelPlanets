import * as THREE from "three"
import { Clock, Vector2 } from "three";
import { CraterLayer } from "./srcPort/Layers/CraterLayer/CraterLayer";
import { GroundLayer } from "./srcPort/Layers/GroundLayer/GroundLayer";
import { LandLayer } from "./srcPort/Layers/LandLayer/LandLayer";

const init = () => {
	const scene = new THREE.Scene();
	const clock = new Clock()
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.z = 2;

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	const layer = new LandLayer()
	layer.position.z = 0.1
	const layer2 = new GroundLayer()
	scene.add(layer)
	// scene.add(layer2)

	function animate() {
		const delta = clock.getElapsedTime()
		layer.update(delta)
		// layer2.update(delta)
		renderer.render(scene, camera);
		requestAnimationFrame(animate);

	}
	animate();
}

window.onload = init