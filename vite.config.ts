import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: '/Ajit-Online-Portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/framer-motion')) {
            return 'vendor'
          }
          if (id.includes('@tsparticles')) {
            return 'particles'
          }
        },
      },
    },
    sourcemap: false,
    chunkSizeWarningLimit: 600,
  },
})
