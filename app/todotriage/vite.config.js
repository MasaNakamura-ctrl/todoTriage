import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/todoTriage',  // アプリをプッシュしたリポジトリ名
  plugins: [react()],
})
