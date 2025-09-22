import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // أضيفي هذا السطر

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],  // أضيفي tailwindcss() هنا
})
