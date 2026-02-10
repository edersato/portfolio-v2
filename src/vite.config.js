import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: './',
  root: '.', // Garante que o root seja o diretório atual
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  
  server: {
    port: 5173,
    open: true // Abre o navegador automaticamente
  },
  
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})