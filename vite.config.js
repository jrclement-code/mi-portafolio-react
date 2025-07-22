import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 usa el nombre exacto del repositorio en GitHub
export default defineConfig({
  base: '/mi-portafolio-react/', 
  plugins: [react()],
})
