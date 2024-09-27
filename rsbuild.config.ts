import { defineConfig } from '@rsbuild/core'
import { pluginEslint } from '@rsbuild/plugin-eslint'
import { pluginReact } from '@rsbuild/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [pluginReact(), pluginEslint()],
  source: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
