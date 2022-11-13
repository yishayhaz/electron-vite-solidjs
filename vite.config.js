import { defineConfig } from "vite";
import { rmSync } from "fs";
import solidPlugin from "vite-plugin-solid";
import electron from "vite-electron-plugin";
import renderer from "vite-plugin-electron-renderer";

rmSync("dist-electron", { recursive: true, force: true });

export default defineConfig({
  resolve: ["", ".js", ".jsx"],
  plugins: [
    solidPlugin(),
    electron({
      include: ["main.js"],
    }),
    renderer({
      nodeIntegration: true,
    }),
  ],
});
