import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname)
    }
  },
  server: {
    port: 5173,
    fs: {
      // restrict to this project directory
      allow: [path.resolve(__dirname)]
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
