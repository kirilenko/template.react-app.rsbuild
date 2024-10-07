import { FC } from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { env } from '@/app/config/env'
import { paths } from '@/app/config/paths'
import { routerRootConfig } from '@/app/config/router'
import { RenderLogProvider } from '@/shared/render-log'
import {
  getAbsolutePath,
  RouterContextValue,
  RouterProvider,
} from '@/shared/router'

import './app.css'

const App: FC = () => {
  // todo: fix eslint config (catch the case when useMemo/useCallback is needed)
  const absoluteAuthPaths: Record<
    keyof RouterContextValue['absoluteAuthPaths'],
    string
  > = {
    login: getAbsolutePath({ path: 'root.login', paths }),
    logout: getAbsolutePath({ path: 'root.logout', paths }),
    privateStart: getAbsolutePath({ path: 'root', paths }),
    publicStart: getAbsolutePath({ path: 'root', paths }),
    restore: getAbsolutePath({ path: 'root.restore', paths }),
  }

  return (
    <>
      <RenderLogProvider
        debugEnabled={import.meta.env.MODE !== 'production'}
        isStrictMode={import.meta.env.MODE === 'development'}
      >
        <HelmetProvider>
          <RouterProvider
            {...{ absoluteAuthPaths }}
            config={routerRootConfig}
          />
        </HelmetProvider>
      </RenderLogProvider>
      <span className="hidden">{env.PUBLIC_COMMON_VAR}</span>
      <span className="hidden">{env.PUBLIC_TIMESTAMP}</span>
    </>
  )
}

export default App
