import { ComponentType, FC, LazyExoticComponent, Suspense } from 'react'
import { Navigate, useLocation } from 'react-router'

import { useRoutingContext } from '@/shared/routing/use.routing.context'

type RouteElementProps = {
  component: ComponentType | LazyExoticComponent<ComponentType>
  componentProps?: Record<string, unknown>
  id: string
  isLazy?: boolean
  isPrivate?: boolean
  loadingComponent?: ComponentType
}

const RouteElement: FC<RouteElementProps> = (props) => {
  const {
    component: Component,
    componentProps = {},
    isLazy = false,
    isPrivate = false,
    loadingComponent: LoadingComponent,
  } = props

  const { authed, authPaths } = useRoutingContext()

  const location = useLocation()

  if (
    authed &&
    (location.pathname === authPaths.login ||
      location.pathname === authPaths.restore)
  ) {
    return (
      <Navigate
        to={location.state?.from || authPaths.start}
        replace
        state={{ componentProps, from: location }}
      />
    )
  }

  if (!authed && isPrivate) {
    return (
      <Navigate
        to={{ pathname: authPaths.login }}
        replace
        state={{ componentProps, from: location }}
      />
    )
  }

  if (!isLazy) {
    return <Component {...componentProps} />
  }

  return (
    <Suspense fallback={LoadingComponent ? <LoadingComponent /> : null}>
      <Component {...componentProps} />
    </Suspense>
  )
}

export type { RouteElementProps }
export { RouteElement }
