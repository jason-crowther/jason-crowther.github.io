import { dirname, resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const __dirname = dirname(fileURLToPath(import.meta.url))
import svgLoader from 'vite-svg-loader';
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      output: {
        dir: 'dist',
      },
    },
  },
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
