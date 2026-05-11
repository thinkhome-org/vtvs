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
  '/overeni-dic',
  '/bulletin',
] as const

const enPrerenderPaths = [
  '/en',
  '/en/sluzby',
  '/en/cenik',
  '/en/podporujeme',
  '/en/kontakt',
  '/en/odkazy',
  '/en/overeni-dic',
  '/en/bulletin',
] as const

const prerenderPages = [
  ...staticPrerenderPaths.map((path) => ({ path })),
  ...enPrerenderPaths.map((path) => ({ path })),
  ...bulletinIndex.map((b) => ({ path: b.href })),
  ...bulletinIndex.map((b) => ({ path: `/en${b.href}` })),
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
