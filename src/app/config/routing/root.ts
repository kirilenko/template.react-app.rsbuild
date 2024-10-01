import { lazy } from 'react'

import { Home } from '@/pages/home'
import { RouteConfig } from '@/shared/routing'
import { about } from './root.about'

const routingConfig: Record<string, RouteConfig> = {
  about,
  contacts: {
    component: lazy(() => import('@/pages/contacts')),
    id: 'contacts',
    isLazy: true,
    path: '/contacts',
  },
  home: {
    component: Home,
    id: 'home',
    path: '/',
  },
  noMatch: {
    component: lazy(() => import('@/pages/no-match')),
    id: 'noMatch',
    isLazy: true,
    path: '*',
  },
}

export { routingConfig }
