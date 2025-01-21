import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    modeuls:{
      localsConvention: "camelCase",
    }
  },
  server: {
    watch: {
        usePolling: true
    }
}
})
