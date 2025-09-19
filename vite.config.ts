import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure output directory is `dist`
    rollupOptions: {
      input: './index.html', // Ensure correct entry point
    },
  },
  base: './', // Use relative paths for all assets
});
