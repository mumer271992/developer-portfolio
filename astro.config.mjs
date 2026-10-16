// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static site (default output). Vercel detects Astro and serves the `dist` folder.
export default defineConfig({
  // Replace with your real domain after deploying, e.g. https://muhammadumer.vercel.app
  site: 'https://example.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
