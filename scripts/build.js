import { build } from "esbuild";

build({
    entryPoints: ['./index.ts'],
    bundle: true,
    // minify: true
    outfile: './bundle/index.js',
})