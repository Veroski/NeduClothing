import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/NeduClothing/', // Reemplaza 'NeduClothing' con el nombre exacto de tu repositorio
});
