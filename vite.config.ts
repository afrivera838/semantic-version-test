import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import dynamicImport from 'vite-plugin-dynamic-import'

const path = require('path')
const { parsed } = require('dotenv').config({
  path: path.resolve(__dirname, './.env'),
})

export default defineConfig((): any => {
  const publicAssetsBaseUrl = 'http://localhost:3002/'

  return {
    define: {
      'process.env': {}
    },
    root: './src',
    base: publicAssetsBaseUrl,
    rollupOptions: {
      input: 'abatech-boilerplate.tsx',
      format: 'system',
      preserveEntrySignatures: true,
    },

    build: {
      outDir: '../dist',
      emptyOutDir: true,
      cssCodeSplit: false,
      manifest: true,
      rollupOptions: {
        input: './src/abatech-boilerplate.tsx',
        preserveEntrySignatures: true,
        output: {
          entryFileNames: '[name].js',
          assetFileNames: 'assets/[name].[ext]',
        },
      },
    },
    plugins: [reactRefresh(), dynamicImport()],
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'],
  }
})

