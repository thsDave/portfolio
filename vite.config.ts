import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// GitHub Pages serves this project from /portfolio/, so that stays the default
// base for every mode except "hosting" — used to build a copy for a custom
// domain/subdomain served from the web root ("/"). See README → "Despliegue
// manual en hosting" and `npm run build:hosting` / `npm run prepare:deploy`.
export default defineConfig(({ mode }) => ({
  base: mode === 'hosting' ? '/' : '/portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false,
  },
}))
