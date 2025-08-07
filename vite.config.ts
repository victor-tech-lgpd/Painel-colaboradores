/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Adicione esta seção de teste
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', 
   },
build: {
    chunkSizeWarningLimit: 1100, // novo limite em kB
  },

})