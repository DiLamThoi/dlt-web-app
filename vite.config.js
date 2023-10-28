/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src'),
            '@dlt-components': path.resolve(__dirname, './dlt-module-commons/dlt-components'),
            '@dlt-object-base': path.resolve(__dirname, './dlt-module-commons/dlt-object-base'),
            // Module
            '@dlt-module-base': path.resolve(__dirname, './dlt-module-commons/dlt-object-base/dlt-base'),
            '@dlt-module-job': path.resolve(__dirname, './dlt-module-commons/dlt-object-base/dlt-job'),
        },
    },
});
