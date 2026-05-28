import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        buy: resolve(__dirname, 'buy.html'),
        sell: resolve(__dirname, 'sell.html'),
        admin: resolve(__dirname, 'admin.html')
      }
    }
  }
})
