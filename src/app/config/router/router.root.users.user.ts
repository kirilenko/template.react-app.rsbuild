import { paths } from '@/app/config/paths'
import { RouteObjectWithAuth } from '@/shared/router'
import { routerRootUsersUserCirclesConfig } from './router.root.users.user.circles'

const routerRootUsersUserConfig: RouteObjectWithAuth = {
  children: [
    routerRootUsersUserCirclesConfig,
    {
      id: 'users-user-index',
      index: true,
      isPrivate: true,
      lazy: async () => ({
        Component: (await import('@/pages/root/users/user/user-index'))
          .UserIndex,
      }),
    },
  ],
  id: 'user',
  isPrivate: true,
  lazy: async () => ({
    Component: (await import('@/pages/root/users/user')).User,
  }),
  path: paths.root.users.user.index,
}

export { routerRootUsersUserConfig }
