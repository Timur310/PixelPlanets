import * as THREE from "three"
import { Clock, Vector2 } from "three";
import { CraterLayer } from "./srcPort/Layers/CraterLayer/CraterLayer";
import { GroundLayer } from "./srcPort/Layers/GroundLayer/GroundLayer";

const init = () => {
	const scene = new THREE.Scene();
	const clock = new Clock()
	let x, y: number;
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.z = 2;

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	const layer = new CraterLayer()
	const layer2 = new GroundLayer()
	scene.add(layer2)
	scene.add(layer)
	document.body.addEventListener('mousemove', (e) => {
		const rect = e.target.getBoundingClientRect();
		x = (e.clientX - rect.left) / 1000;
		y = (e.clientY - rect.top) / 1000 - 1;
	})

	function animate() {
		const delta = clock.getElapsedTime()
		requestAnimationFrame(animate);
		layer.update(delta)
		layer.lightOrigin = new Vector2(x, -y)
		layer2.update(delta)
		layer2.lightOrigin = new Vector2(x, -y)
		renderer.render(scene, camera);

	}
	animate();
}

window.onload = init