import { build } from "esbuild";

build({
    entryPoints: ["./test.ts"],
    outfile: "./planets.bundle.js",
    bundle: true,
    minify: true,
    legalComments: "none",
    logLevel: "info",
})
