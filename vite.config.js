import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  optimizeDeps: {
    esbuildOptions: {
      // Fix for "The requested module 'react' does not provide an export named 'useId'"
      jsx: 'automatic',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
