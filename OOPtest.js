import { createCamera } from "./src/camera";
import { StarPlanet } from './src/Classes/starClass';
import { createClock, createScene, createWebGlRenderer } from "./src/Three";

function init() {

    const container = document.querySelector('#root');
    const aspect = container.clientWidth / container.clientHeight;
    const scene = createScene();
    const clock = createClock();
    const camera = createCamera(75, aspect, 0.1, 100000);

    camera.position.setZ(1)

    const renderer = createWebGlRenderer();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const star = new StarPlanet("red")
    scene.add(star.getStar())

    document.getElementById("root").appendChild(renderer.domElement);

    function animate() {
        requestAnimationFrame(animate);

        star.update(clock.getElapsedTime())

        camera.updateProjectionMatrix();

        renderer.render(scene, camera);
    };

    animate();
}

window.onload = () => {
    init()
}
