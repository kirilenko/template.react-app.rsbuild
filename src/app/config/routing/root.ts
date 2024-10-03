import { lazy } from 'react'

import { paths } from '@/app/config/paths'
import { Home } from '@/pages/home'
import Login from '@/pages/login'
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
  login: {
    component: Login,
    id: 'login',
    path: paths.root.login.index,
  },
  logout: {
    component: lazy(() => import('@/pages/logout')),
    id: 'logout',
    isLazy: true,
    isPrivate: true,
    path: paths.root.logout.index,
  },
  noMatch: {
    component: lazy(() => import('@/pages/no-match')),
    id: 'noMatch',
    isLazy: true,
    path: '*',
  },
  restore: {
    component: lazy(() => import('@/pages/restore')),
    id: 'restore',
    isLazy: true,
    path: paths.root.restore.index,
  },
  users,
}

export { routingConfig }
