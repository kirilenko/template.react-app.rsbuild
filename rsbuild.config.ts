import { defineConfig } from '@rsbuild/core'
import { pluginEslint } from '@rsbuild/plugin-eslint'
import { pluginReact } from '@rsbuild/plugin-react'
import path from 'path'

// For redefine env vars:
// const { publicVars } = loadEnv() // from '@rsbuild/core'
// and then:
// source: { define: publicVars }
// For many public prefix vars use: loadEnv({ prefixes: ['REACT_APP_'] })

export default defineConfig({
  plugins: [pluginReact(), pluginEslint()],
  source: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
