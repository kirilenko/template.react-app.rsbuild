import { useCallback } from 'react'
import {
  LoaderFunction,
  LoaderFunctionArgs,
  redirect,
  RouteObject,
} from 'react-router'

import { RouterContextValue } from './router.context'
import { getSearchParamsFromUrl } from './router.features'

type UseGuard = (props: {
  authed: RouterContextValue['authed']
  absoluteAuthPaths: RouterContextValue['absoluteAuthPaths']
}) => {
  guardLoader: LoaderFunction
  loginLoader: LoaderFunction
  logoutLoader: LoaderFunction
}

const useGuard: UseGuard = ({ authed, absoluteAuthPaths }) => {
  const guardLoader: RouteObject['loader'] = useCallback(
    ({ request }: LoaderFunctionArgs) => {
      if (authed) return null

      const searchParams = getSearchParamsFromUrl(request.url)
      const params = new URLSearchParams(searchParams)
      params.set('from', request.url)
      return redirect(`${absoluteAuthPaths.login}?${params.toString()}`)
    },
    [absoluteAuthPaths.login, authed],
  )

  const loginLoader: RouteObject['loader'] = useCallback(
    ({ request }: LoaderFunctionArgs) => {
      if (!authed) return null

      const { searchParams } = new URL(request.url)
      const from = searchParams.get('from')
      return redirect(from || absoluteAuthPaths.privateStart)
    },
    [absoluteAuthPaths.privateStart, authed],
  )

  const logoutLoader: RouteObject['loader'] = useCallback(
    () => (authed ? null : redirect(absoluteAuthPaths.publicStart)),
    [absoluteAuthPaths.publicStart, authed],
  )

  return { guardLoader, loginLoader, logoutLoader }
}

export { useGuard }
