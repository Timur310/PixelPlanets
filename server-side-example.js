//Example to render image from node without browser
import {
    Group,
    LinearFilter,
    NearestFilter,
    PerspectiveCamera,
    RGBAFormat,
    Scene,
    UnsignedByteType,
    WebGLRenderer,
    WebGLRenderTarget
} from "three";
import gl from "gl";
import {Canvas} from "canvas"; // https://npmjs.com/package/gl v4.9.0
import * as fs from "fs";
import {createNoAtmospherePlanet} from "./src/Planets/noAtmosphere.js";

// noinspection JSConstantReassignment
global.navigator = {
    userAgent: ''
}

function generatePpm() {
    const width = 256;
    const height = 256;
    const aspect = width / height;
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, aspect, 0.1, 100000);
    const planetGroup = new Group()

    planetGroup.add(createNoAtmospherePlanet());
    scene.add(planetGroup)

    const renderer = createWebGlServerRenderer(width, height);

    renderer.setSize(width, height);

    camera.position.z = 1;

    renderer.render(scene, camera);

    const image = extractPixels(renderer.getContext());

    fs.writeFileSync("test.png", toP3(image).toBuffer('image/png'));
}

/**
 *
 * @returns {{pixels: Uint8Array, width: (*|GLsizei), height: (*|GLsizei)}}
 * @param {WebGLRenderingContext | WebGL2RenderingContext} context
 */
function extractPixels(context) {
    const width = context.drawingBufferWidth;
    const height = context.drawingBufferHeight;
    const frameBufferPixels = new Uint8Array(width * height * 4);
    context.readPixels(0, 0, width, height, context.RGBA, context.UNSIGNED_BYTE, frameBufferPixels);
    // The framebuffer coordinate space has (0, 0) in the bottom left, whereas images usually
    // have (0, 0) at the top left. Vertical flipping follows:
    const pixels = new Uint8Array(width * height * 4);
    for (let fbRow = 0; fbRow < height; fbRow += 1) {
        let rowData = frameBufferPixels.subarray(fbRow * width * 4, (fbRow + 1) * width * 4);
        let imgRow = height - fbRow - 1;
        pixels.set(rowData, imgRow * width * 4);
    }
    return {width, height, pixels};
}

function toP3({width, height, pixels}) {
    const canva = new Canvas(width, height);
    const context = canva.getContext('2d');

    const bytesPerPixel = pixels.length / width / height;
    const rowLen = width * bytesPerPixel;


    let y = 0;
    let x = 0;
    let i = 0
    let rgb = []

    for (i; i < pixels.length; i += bytesPerPixel) {
        // Break output into rows
        if (i > 0 && i % rowLen === 0) {
            x = 0;
            y++;
        }

        rgb = [];
        for (let j = 0; j < 3; j += 1) {
            rgb.push(pixels[i + j]);
        }

        context.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`
        context.fillRect(x, y, 1, 1)
        x++;
    }

    return canva;
}

function createWebGlServerRenderer(w, h) {
    const canvas = new Canvas(w, h);
    canvas.addEventListener = event => {
    };
    canvas.removeEventListener = event => {
    };
    canvas.style = {};

    const renderTarget = new WebGLRenderTarget(w, h, {
        minFilter: LinearFilter,
        magFilter: NearestFilter,
        format: RGBAFormat,
        type: UnsignedByteType,
    });

    const renderer = new WebGLRenderer({
        canvas: canvas,
        context: gl(w, h, {
            preserveDrawingBuffer: true,
            powerPreference: 'high-performance'
        }),
    });

    renderer.setRenderTarget(renderTarget);

    return renderer;
}

generatePpm()
