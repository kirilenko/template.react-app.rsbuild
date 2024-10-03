import { createContext } from 'react'

type RoutingContextValue = {
  authPaths: {
    login: string
    logout: string
    restore: string
    start: string
  }
  authed: boolean
  setAuthed: (p: boolean | ((prev: boolean) => boolean)) => void
}

const RoutingContext = createContext<RoutingContextValue>({
  authPaths: {
    login: 'login',
    logout: 'logout',
    restore: 'restore',
    start: '/',
  },
  authed: false,
  setAuthed: () => null,
})

export type { RoutingContextValue }
export { RoutingContext }
