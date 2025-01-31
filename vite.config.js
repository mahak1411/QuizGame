import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/Uw5CrX': 'https://api.jsonserve.com', // Redirect API calls to the server
    },
  },
});
