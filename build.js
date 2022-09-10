import { build } from "esbuild";
import { glsl } from "esbuild-plugin-glsl";

build({
    entryPoints: ["./src2/index.ts"],
    outfile: "./src2/build/app.bundle.js",
    bundle: true,
    minify: true,
    legalComments: "none",
    logLevel: "info",
    plugins: [glsl({
		minify: true
	})],
})
