import * as esbuild from "esbuild";
import process from "node:process";

await esbuild.build({
  entryPoints: [`${process.cwd()}/src/index.js`],
  bundle: true,
  outfile: "dist/emitters.esm.js",
  minify: true,
  format: "esm",
});

await esbuild.build({
  entryPoints: [`${process.cwd()}/src/index.js`],
  bundle: true,
  outfile: "dist/emitters.iife.js",
  minify: true,
  format: "iife",
  globalName: "emitters",
});
