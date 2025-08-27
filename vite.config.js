import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // Si usas React

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.ngrok-free.app']
  }
})