import { createContext } from 'react'

type RoutingContextValue = {
  defaultPageTitle: string
}

const RoutingContext = createContext<RoutingContextValue>({
  defaultPageTitle: '',
})

export type { RoutingContextValue }
export { RoutingContext }
