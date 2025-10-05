/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'
import solidPlugin from 'vite-plugin-solid'

export default getViteConfig({
  plugins: [solidPlugin()],
  test: {
    environment: 'jsdom', // 👈 this fixes the userEvent + Solid issue
    globals: true, // optional, lets you use test/expect without imports
    // setupFiles: './vitest.setup.ts', // optional, for custom test env patches
  },
})
// import { defineConfig } from 'vitest/config'

// export default defineConfig({
//   plugins: [solidPlugin()],
//   test: {
//     environment: 'jsdom', // 👈 REQUIRED
//     globals: true,
//     // setupFiles: './vitest.setup.ts', // optional, see below
//   },
// })
