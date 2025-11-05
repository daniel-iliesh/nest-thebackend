"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
var node_globals_polyfill_1 = require("@esbuild-plugins/node-globals-polyfill");
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    build: {
        ssr: true,
        target: 'node20',
        outDir: './dist',
        rollupOptions: {
            input: './src/index.ts',
            external: ['react', 'react-dom/server'],
        },
    },
    resolve: {
        alias: {
        // Aliases if needed
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            // Polyfills for Node.js globals and built-ins
            plugins: [
                (0, node_globals_polyfill_1.NodeGlobalsPolyfillPlugin)({
                    process: true,
                    buffer: true,
                }),
            ],
        },
    },
});
