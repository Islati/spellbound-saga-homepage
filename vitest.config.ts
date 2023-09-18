import {defineConfig} from 'vite';

import {alias} from "./aliases"

export default defineConfig({
    resolve: {alias},
    test: {
        include: ["test/**/*.test.{ts,js}"], // or "tests/**/*.test.{ts,js}" if your directory is named 'tests'
        exclude: ["**/node_modules/**", "**/dist/**"] // other exclusions
    }
});