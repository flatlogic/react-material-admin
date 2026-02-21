import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcRoot = path.resolve(__dirname, 'src');

const srcDirectoryAliases = fs
  .readdirSync(srcRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => ({
    find: entry.name,
    replacement: path.resolve(srcRoot, entry.name),
  }));

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: [
      { find: '@', replacement: srcRoot },
      ...srcDirectoryAliases,
      { find: 'process', replacement: 'process/browser' },
      { find: 'buffer', replacement: 'buffer' },
      { find: 'crypto', replacement: 'crypto-browserify' },
      { find: 'stream', replacement: 'stream-browserify' },
      { find: 'assert', replacement: 'assert' },
      { find: 'http', replacement: 'stream-http' },
      { find: 'https', replacement: 'https-browserify' },
      { find: 'os', replacement: 'os-browserify/browser' },
      { find: 'url', replacement: 'url' },
      { find: 'vm', replacement: 'vm-browserify' },
    ],
  },
  define: {
    global: 'globalThis',
    'process.env': '{}',
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  server: {
    port: 3000,
  },
}));
