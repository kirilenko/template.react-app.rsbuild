import { createContext } from 'react'

type RouterContextValue = {
  absoluteAuthPaths: {
    login: string
    logout: string
    privateStart: string
    publicStart: string
    restore: string
  }
  authed: boolean
  setAuthed: (p: boolean | ((prev: boolean) => boolean)) => void
}

const RouterContext = createContext<RouterContextValue>({
  absoluteAuthPaths: {
    login: 'login',
    logout: 'logout',
    privateStart: '/',
    publicStart: '/',
    restore: 'restore',
  },
  authed: false,
  setAuthed: () => null,
})

export type { RouterContextValue }
export { RouterContext }
