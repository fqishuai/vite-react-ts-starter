import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
const autoprefixer = require('autoprefixer')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     input: '/public/index.html'
  //   }
  // },
  publicDir: false,
  resolve: {
    alias: {
      '@': '/src/'
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer,
        tailwindcss
      ]
    }
  }
})
