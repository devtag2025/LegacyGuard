// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        advancedChunks: {
          groups: [
            { 
              name: 'vendor', 
              test: /[\\/]node_modules[\\/](react|react-dom|react-router)[\\/]/ 
            },
            { 
              name: 'query', 
              test: /[\\/]node_modules[\\/](@tanstack\/react-query|axios)[\\/]/ 
            },
          ],
        },
      },
    },
  },
});