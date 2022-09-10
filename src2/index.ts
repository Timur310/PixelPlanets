import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { BaseLayer } from "./layers/baseLayer/baseLayer";

function initScene() {
    const container = document.querySelector('#root');

    const renderer = new WebGLRenderer({antialias: true})
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);
    
    const aspect = container.clientWidth / container.clientHeight;
    const scene = new Scene()
    const clock = new Clock()

    const camera = new PerspectiveCamera(75, aspect, 0.1, 100000);
    camera.position.z = 1;

    const base = new BaseLayer();

    scene.add(base.mesh)

    animate()

    function animate(): void {
        requestAnimationFrame(animate);
        if(base.material.uniforms["time"])
        {
            base.material.uniforms["time"].value = clock.getElapsedTime();
        }
        renderer.render(scene,camera)
    }
}

window.onload = () => {
    initScene()
}

