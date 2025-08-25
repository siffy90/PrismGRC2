import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',            // project root is frontend/
  publicDir: 'public',  // you can omit or leave if you have static assets
  build: {
    outDir: 'dist',     // output goes to frontend/dist
    emptyOutDir: true
  },
  plugins: [react()]
});
