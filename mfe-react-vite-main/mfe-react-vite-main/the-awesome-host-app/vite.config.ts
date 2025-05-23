import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'awesome-host-app',
      remotes: {
        awesomeRemote: 'http://localhost:4000/assets/remoteEntry.js',

      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    })

  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
