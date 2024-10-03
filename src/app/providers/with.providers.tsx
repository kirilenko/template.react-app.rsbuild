import { FC } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter as Router } from 'react-router-dom'

import { paths } from '@/app/config/paths'
import { RoutingProvider } from '@/shared/routing'

const withProviders =
  <Props extends Record<string, unknown>>(Component: FC<Props>): FC<Props> =>
  (props: Props) => {
    // todo: fix eslint config (catch the case when useMemo is needed)
    const authPaths = {
      login: paths.root.login.index,
      logout: paths.root.logout.index,
      restore: paths.root.restore.index,
      start: paths.root.index,
    }

    return (
      <HelmetProvider>
        <Router>
          <RoutingProvider {...{ authPaths }}>
            <Component {...props} />
          </RoutingProvider>
        </Router>
      </HelmetProvider>
    )
  }

export { withProviders }
