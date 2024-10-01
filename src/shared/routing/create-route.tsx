import { ReactNode } from 'react'
import { Route, RouteProps } from 'react-router-dom'

import { RouteElement, RouteElementProps } from './route-element'

type RouteConfig = Omit<RouteElementProps, 'isPage'> & {
  index?: boolean
  nestedRouteConfig?: Record<string, RouteConfig>
  path?: string
}

function createRoute({
  index,
  nestedRouteConfig = {},
  path,
  ...routeElementProps
}: RouteConfig): ReactNode {
  const routeProps = {
    element: <RouteElement {...routeElementProps} />,
    ...{ index, path },
  } as RouteProps

  if (!Object.keys(nestedRouteConfig).length) {
    return <Route key={routeElementProps.id} {...routeProps} />
  }

  return (
    // @ts-ignore
    <Route key={routeElementProps.id} {...routeProps}>
      {Object.values(nestedRouteConfig).map(createRoute)}
    </Route>
  )
}

export type { RouteConfig }
export { createRoute }
