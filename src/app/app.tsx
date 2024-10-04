import { FC } from 'react'
import { Routes } from 'react-router-dom'
import { loremIpsum } from 'lorem-ipsum'

import { env } from '@/app/config/env'
import { routingConfig } from '@/app/config/routing'
import { Menu } from '@/modules/menu'
import { useRenderLog } from '@/shared/render-log'
import { createRoute } from '@/shared/routing'
import { withProviders } from './providers'

import './app.css'

const App: FC = () => {
  useRenderLog()('App')()

  return (
    <>
      <div className="flex h-full w-full items-stretch justify-stretch">
        <div className="flex w-64 flex-none flex-col items-stretch justify-start overflow-y-auto bg-stone-600 px-8 py-16">
          <h1 className="text-xl">Rsbuild w/ React</h1>
          <hr className="my-8 border-gray-300" />
          <Menu />
          <hr className="my-8 border-gray-300" />
          {loremIpsum({ count: 10 })}
        </div>
        <div className="relative flex-1">
          <Routes>{Object.values(routingConfig).map(createRoute)}</Routes>
        </div>
      </div>
      <span className="hidden">{env.PUBLIC_COMMON_VAR}</span>
      <span className="hidden">{env.PUBLIC_TIMESTAMP}</span>
    </>
  )
}

export default withProviders(App)
