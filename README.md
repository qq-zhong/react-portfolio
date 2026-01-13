# React + Vite

https://youtu.be/YQCDUJ6hhNY?t=6202

npm run dev

or

npm run build
npm run preview // for preview on local server

todo:

reorder to put unity on top, rid of ue5

add game developer icon

fix the demo project bottom section



deploy code:
npm run build
npm install --save-dev gh-pages



modifying vite.config.js to 
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
        usePolling: true
    }
}
})

allowed for live editing out of wsl2

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
