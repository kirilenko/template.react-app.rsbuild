import { FC, useCallback, useMemo, useState } from 'react'
import { LoaderFunction, RouteObject } from 'react-router'
import {
  createHashRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'

import { RouterContext, RouterContextValue } from './router.context'
import { RouteObjectWithAuth } from './router.features'
import { useGuard } from './use.guard'

type Props = {
  absoluteAuthPaths: RouterContextValue['absoluteAuthPaths']
  config: RouteObjectWithAuth[]
}

const RouterProvider: FC<Props> = ({ absoluteAuthPaths, config }) => {
  const [authed, setAuthed] = useState<RouterContextValue['authed']>(false)

  const loaders = useGuard({ absoluteAuthPaths, authed })

  const getLoader = useCallback(
    (
      rawRoute: RouteObjectWithAuth,
    ): Record<'loader', LoaderFunction> | Record<string, never> => {
      if (rawRoute.isPublicOnly) return { loader: loaders.loginLoader }
      if (rawRoute.id === 'logout') return { loader: loaders.logoutLoader }
      if (rawRoute.isPrivate) return { loader: loaders.guardLoader }
      return {}
    },
    [loaders.guardLoader, loaders.loginLoader, loaders.logoutLoader],
  )

  // todo: fix eslint config (catch the case when useCallback is needed)
  const mapConfigWithAuthToRoutes = useCallback(
    (rawRoutes: RouteObjectWithAuth[]): RouteObject[] =>
      rawRoutes.map((rawRoute) => {
        const { isPrivate, isPublicOnly, ...route } = rawRoute
        return {
          ...getLoader(rawRoute),
          ...route,
          ...(route.children
            ? { children: mapConfigWithAuthToRoutes(route.children) }
            : {}),
        } as RouteObject
      }),
    [getLoader],
  )

  const value: RouterContextValue = useMemo(
    () => ({ absoluteAuthPaths, authed, setAuthed }),
    [absoluteAuthPaths, authed, setAuthed],
  )

  return (
    <RouterContext.Provider {...{ value }}>
      <ReactRouterProvider
        router={createHashRouter(mapConfigWithAuthToRoutes(config))}
      />
    </RouterContext.Provider>
  )
}

export { RouterProvider }
