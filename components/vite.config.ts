import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // In CI (GitHub Actions) the key comes from the shell environment via `env:`,
    // which loadEnv() does NOT read — it only reads .env files. So fall back to process.env.
    const apiKey =
      env.VITE_GEMINI_API_KEY ||
      env.GEMINI_API_KEY ||
      process.env.VITE_GEMINI_API_KEY ||
      process.env.GEMINI_API_KEY ||
      '';
    return {
      base: '/site-elevarte/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(apiKey),
        'process.env.GEMINI_API_KEY': JSON.stringify(apiKey)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
