import { GUI } from 'dat.gui';
import { Group } from 'three';
import { settings } from './settings';
import { createCamera } from './src/camera';
import { createlandMassLayer } from './src/Layers/landMass';
import { createStars } from './src/Layers/stars';
import { createEarthPlanet } from './src/Planets/earthPlanet';
import { createClock, createScene, createWebGlRenderer } from './src/Three';
import { generatePlanetByType } from './src/utils';

function initScene() {

    const container = document.querySelector('#root');
    const aspect = container.clientWidth / container.clientHeight;
    const scene = createScene();
    const clock = createClock();
    const camera = createCamera(75, aspect, 0.1, 100000);

    const planetGroup = new Group()
    // add starting planet
    planetGroup.add(generatePlanetByType(settings.planetOptions[0]));
    scene.add(planetGroup)

    // use dat.gui to play around
    const gui = new GUI({ name: "Pixel planets" })
    gui.add(settings, 'planetTypes', settings.planetOptions).onChange((v) => {
        planetGroup.children.pop().remove()
        planetGroup.add(generatePlanetByType(v));
    });
    gui.add(settings, "seed").onChange(() => {
        planetGroup.children.forEach(planet => {
            planet.children.forEach(layer => {
                layer.material.uniforms["seed"].value = settings.seedValue
                // for asteroids
                if (layer.material.uniforms["size"]) {
                    layer.material.uniforms["size"].value = Math.random() * 10
                }
            });
        });
    })

    const skySpeed = 0.00001;

    const renderer = createWebGlRenderer();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // // prepare background layer
    // const backgroundLayerDust = createDustLayer();
    // scene.add(backgroundLayerDust);
    // const backgroundLayerNebula = createNebulaLayer();
    // scene.add(backgroundLayerNebula);

    // prepare star particles
    const starGroup = createStars(1000);
    scene.add(starGroup);

    document.getElementById("root").appendChild(renderer.domElement);
    camera.position.z = 1;

    function animate() {
        requestAnimationFrame(animate);

        // animate planets
        planetGroup.children.forEach(planet => {
            planet.children.forEach(layer => {
                layer.material.uniforms["time"].value = clock.getElapsedTime();
            });
        });

        //update camera

        camera.updateProjectionMatrix();

        // animate space
        starGroup.rotateY(skySpeed);
        starGroup.rotateX(skySpeed);
        starGroup.rotateZ(skySpeed);

        renderer.render(scene, camera);
    };

    animate();
}

window.onload = () => {
    initScene()
}