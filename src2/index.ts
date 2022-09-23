import * as THREE from "three"
import { Clock, Color } from "three";
import { BaseLayer } from "./layers/baseLayer/baseLayer";
import { CraterLayer } from "./layers/craterLayer/craterLayer";
import { DenseGasLayer } from "./layers/denseGasLayer/denseGasLayer";
import { GasLayer } from "./layers/gasLayer/gasLayer";
import { LakeLayer } from "./layers/lakeLayer/lakeLayer";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('root')?.appendChild(renderer.domElement)

const mesh = new LakeLayer().mesh; 
const mesh2 = new BaseLayer().mesh; 
scene.add(mesh)
mesh.position.z += 0.01
scene.add(mesh2)
camera.position.z = 1;
const clock = new Clock()

function animate() {
	requestAnimationFrame( animate );
	mesh.material.uniforms.time.value = clock.getElapsedTime();
	mesh2.material.uniforms.time.value = clock.getElapsedTime();
	renderer.render( scene, camera );
}
animate();