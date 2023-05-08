import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  base: "/filter-search/",
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  build: {
    outDir: "build"
  }
}))
