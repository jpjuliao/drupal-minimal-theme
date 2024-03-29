import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // Define aliases for paths used in your project
      '@': resolve(__dirname, 'components'), // Adjust the path as per your directory structure
    },
  },
  css: {
    preprocessorOptions: {
      // Adjust the paths as per your directory structure
      scss: {
        additionalData: `@import '@/styles/variables.scss';`,
      },
    },
  },
});
