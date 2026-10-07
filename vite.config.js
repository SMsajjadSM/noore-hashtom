import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // نام مخزن خود را دقیقاً به جای <repo-name> بنویسید
  base: 'noore-hashtom', 
})
