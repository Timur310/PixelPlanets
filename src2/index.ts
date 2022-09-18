import * as THREE from "three"
import { CraterLayer } from "./layers/craterLayer/craterLayer";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('root')?.appendChild(renderer.domElement)

scene.add(new CraterLayer().mesh)
camera.position.z = 1;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();