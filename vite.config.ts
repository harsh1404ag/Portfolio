import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ very important for Azure to resolve assets/scripts
  plugins: [react()],
})
