import { defineConfig, loadEnv, SourceMap } from '@rsbuild/core'
import { pluginEslint } from '@rsbuild/plugin-eslint'
import { pluginReact } from '@rsbuild/plugin-react'
import path from 'path'

// For redefine env vars:
// const { publicVars } = loadEnv() // from '@rsbuild/core'
// and then:
// source: { define: publicVars }
// For many public prefix vars use: loadEnv({ prefixes: ['REACT_APP_'] })

const { parsed } = loadEnv()
const SOURCEMAP_JS = (parsed.SOURCEMAP_JS || false) as SourceMap['js']

console.log('● sourceMap.js:', SOURCEMAP_JS) // eslint-disable-line no-console

export default defineConfig({
  output: {
    sourceMap: {
      js: SOURCEMAP_JS,
    },
  },
  plugins: [pluginReact(), pluginEslint()],
  source: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
