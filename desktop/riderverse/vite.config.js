import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Riderverse',
        short_name: 'Riderverse',
        description: 'Ride. Share. Level Up.',
        theme_color: '#202020',
        background_color: '#202020',
        icons: [
          {
            src: 'logo.svg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo.svg',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'logo.svg',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
