import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";

const env = process.env.NODE_ENV;
const pkg = require("./package.json");

export default {
    input: "src/penguinRandomHouse/index.js",
    output: {
        file: {
            es: pkg.module,
            cjs: pkg.main,
            umd: pkg.umd,
        }[env],
        format: env,
        name: "myBundle",
        globals: {
            axios: "axios",
        },
    },
    plugins: [
        nodeResolve(),
        babel({ exclude: "node_modules/**" }),
        commonjs(),
        filesize(),
    ],
    external: ["axios"],
};
