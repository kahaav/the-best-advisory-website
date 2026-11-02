import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: "/the-best-advisory-website/",
  build: {
    rolldownOptions: {
      // A second HTML entry so static hosting (GitHub Pages) serves /design-system/.
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        designSystem: fileURLToPath(new URL('./design-system/index.html', import.meta.url)),
      },
    },
  },
})
