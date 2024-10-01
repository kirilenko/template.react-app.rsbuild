import { ComponentType, FC, LazyExoticComponent, Suspense } from 'react'

type RouteElementProps = {
  component: ComponentType | LazyExoticComponent<ComponentType>
  componentProps?: Record<string, unknown>
  id: string
  isLazy?: boolean
  loadingComponent?: ComponentType
}

const RouteElement: FC<RouteElementProps> = (props) => {
  const {
    component: Component,
    componentProps = {},
    isLazy = false,
    loadingComponent: LoadingComponent,
  } = props

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
