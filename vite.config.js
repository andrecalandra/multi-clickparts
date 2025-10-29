import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // garante que o index.html da raiz será usado
  build: {
    outDir: 'dist',
  },
})