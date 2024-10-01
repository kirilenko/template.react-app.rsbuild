import { FC } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter as Router, NavLink, Routes } from 'react-router-dom'
import { loremIpsum } from 'lorem-ipsum'

import { env, menuConfig, routingConfig } from '@/app/config'
import { createRoute } from '@/shared/routing'

import './app.css'

const App: FC = () => {
  return (
    <>
      <HelmetProvider>
        <Router>
          <div className="flex h-full w-full items-stretch justify-stretch">
            <div className="flex w-64 flex-none flex-col items-stretch justify-start overflow-y-auto bg-stone-600 px-8 py-16">
              <h1 className="text-xl">Rsbuild w/ React</h1>
              <hr className="my-8 border-gray-300" />
              {menuConfig.map(({ id, path, title }) => (
                <NavLink
                  key={id}
                  to={path}
                  className="m-2 block text-blue-400 hover:text-blue-200 [&.active]:text-red-400 [&.active]:underline [&.active]:hover:cursor-default"
                >
                  {title}
                </NavLink>
              ))}
              <hr className="my-8 border-gray-300" />
              {loremIpsum({ count: 10 })}
            </div>
            <Routes>{Object.values(routingConfig).map(createRoute)}</Routes>
          </div>
        </Router>
      </HelmetProvider>
      <span className="hidden">{env.PUBLIC_TIMESTAMP}</span>
    </>
  )
}

export { App }
