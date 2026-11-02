import react from '@vitejs/plugin-react'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'

const BASE = '/the-best-advisory-website/'

const srcPath = (folder: string) => fileURLToPath(new URL(`./src/${folder}`, import.meta.url))

/** Redirects the base path without its trailing slash, e.g. /the-best-advisory-website → /the-best-advisory-website/. */
const redirectBaseWithoutSlash = (): Plugin => {
  const baseWithoutSlash = BASE.slice(0, -1)
  const redirect = (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    const url = req.url ?? ''
    if (url === baseWithoutSlash || url.startsWith(`${baseWithoutSlash}?`)) {
      res.writeHead(301, { Location: BASE + url.slice(baseWithoutSlash.length) })
      res.end()
      return
    }
    next()
  }

  return {
    name: 'redirect-base-without-slash',
    configureServer: (server) => {
      server.middlewares.use(redirect)
    },
    configurePreviewServer: (server) => {
      server.middlewares.use(redirect)
    },
  }
}

export default defineConfig({
  plugins: [react(), redirectBaseWithoutSlash()],
  base: BASE,
  // Keep in step with `paths` in tsconfig.app.json.
  resolve: {
    alias: {
      '@assets': srcPath('assets'),
      '@components': srcPath('components'),
      '@content': srcPath('content'),
      '@pages': srcPath('pages'),
      '@styles': srcPath('styles'),
      '@typings': srcPath('types'),
    },
  },
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
