import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
    base: "/Alert-SA-Web-User-Widget/",
    build:{
      
  rollupOptions: {
      output: {
        entryFileNames: 'user-menu.js',
        assetFileNames: 'user-menu.css'
      }
    }

    },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
