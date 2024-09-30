import {
  ComponentType,
  FC,
  LazyExoticComponent,
  Suspense,
  useContext,
} from 'react'

import { Page } from './page'
import { RoutingContext } from './routing.context'

type RouteElementProps = {
  component: ComponentType | LazyExoticComponent<ComponentType>
  componentProps?: Record<string, unknown>
  id: string
  isLazy?: boolean
  isPage?: boolean
  loadingComponent?: ComponentType
  title?: string
}

const RouteElement: FC<RouteElementProps> = (props) => {
  const { defaultPageTitle } = useContext(RoutingContext)

  const {
    component: Component,
    componentProps = {},
    isLazy = false,
    isPage = false,
    loadingComponent: LoadingComponent,
    title = defaultPageTitle,
  } = props

  if (!isLazy) {
    return (
      <Page {...(isPage ? { title } : {})}>
        <Component {...componentProps} />
      </Page>
    )
  }

  return (
    <Page {...(isPage ? { title } : {})}>
      <Suspense fallback={LoadingComponent ? <LoadingComponent /> : null}>
        <Component {...componentProps} />
      </Suspense>
    </Page>
  )
}

export type { RouteElementProps }
export { RouteElement }
