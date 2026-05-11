import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { cloudflare } from '@cloudflare/vite-plugin'
import { bulletinIndex } from './src/data/bulletinIndex.ts'
import { siteUrl } from './src/data/site.ts'

const staticPrerenderPaths = [
  '/',
  '/sluzby',
  '/cenik',
  '/podporujeme',
  '/kontakt',
  '/odkazy',
  '/en',
  '/overeni-dic',
  '/bulletin',
] as const

const prerenderPages = [
  ...staticPrerenderPaths.map((path) => ({ path })),
  ...bulletinIndex.map((b) => ({ path: b.href })),
]

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart({
      prerender: { enabled: true },
      sitemap: { enabled: true, host: siteUrl },
      pages: prerenderPages,
    }),
    viteReact(),
  ],
})
