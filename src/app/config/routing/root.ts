import { lazy } from 'react'

import { paths } from '@/app/config/paths'
import { Home } from '@/pages/home'
import { RouteConfig } from '@/shared/routing'
import { about } from './root.about'
import { users } from './root.users'

const routingConfig: Record<string, RouteConfig> = {
  about,
  home: {
    component: Home,
    id: 'home',
    path: paths.root.index,
  },
  noMatch: {
    component: lazy(() => import('@/pages/no-match')),
    id: 'noMatch',
    isLazy: true,
    path: '*',
  },
  users,
}

export { routingConfig }