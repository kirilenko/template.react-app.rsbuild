import { lazy } from 'react'

import { paths } from '@/app/config/paths'
import Users from '@/pages/users'
import { RouteConfig } from '@/shared/routing'

const users: RouteConfig = {
  component: Users,
  id: 'users',
  nestedRouteConfig: {
    user: {
      component: lazy(() => import('@/pages/users/user')),
      id: 'user',
      isLazy: true,
      path: paths.root.users.user.index,
    },
    usersIndex: {
      component: lazy(() => import('@/pages/users/users-index')),
      id: 'usersIndex',
      index: true, // - w/o path
      isLazy: true,
    },
  },
  path: paths.root.users.index,
}

export { users }
