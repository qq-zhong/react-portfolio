import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio/', // what it was before 
  // base: '/', // Ensure the base path is root, not /dist
  // build: {
  //   outDir: 'C:/xampp/htdocs',  // Set the output directory to htdocs
  //   assetsDir: 'assets',        // Keeps assets organized in a folder
  // },
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
