import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react-swc';
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
  plugins: [
    react({
      parserConfig: (id) => {
        if (id.endsWith('.ts')) {
          return { syntax: 'typescript', tsx: false };
        }
        if (id.endsWith('.tsx')) {
          return { syntax: 'typescript', tsx: true };
        }
        if (id.endsWith('.js') || id.endsWith('.jsx')) {
          return { syntax: 'ecmascript', jsx: true };
        }

        return undefined;
      },
    }),
  ],
  build: {
    outDir: 'build',
  },
  css: {
    preprocessorOptions: {},
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  resolve: {
    alias: [
      { find: '@', replacement: srcRoot },
      ...srcDirectoryAliases,
    ],
  },
  define: {
    global: 'globalThis',
    'process.env': '{}',
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
      define: {
        global: 'globalThis',
      },
    },
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
    fileParallelism: false,
  },
}));
