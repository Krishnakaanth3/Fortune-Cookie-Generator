import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Fortune-Cookie-Generator/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
