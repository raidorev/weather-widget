/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ customElement: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('src/widget.ts', import.meta.url)),
      name: 'weather-widget',
    },
  },
  define: {
    'process.env': {},
  },
  test: {
    setupFiles: ['./tests/setup.ts'],
  },
})
