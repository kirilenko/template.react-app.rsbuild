import { paths } from '@/app/config/paths'
import { Users } from '@/pages/root/users'
import { RouteObjectWithAuth } from '@/shared/router'
import { routerRootUsersUserConfig } from './router.root.users.user'

const routerRootUsersConfig: RouteObjectWithAuth = {
  Component: Users,
  children: [
    routerRootUsersUserConfig,
    {
      id: 'users-index',
      index: true,
      isPrivate: true,
      lazy: async () => ({
        Component: (await import('@/pages/root/users/users-index')).UsersIndex,
      }),
    },
  ],
  id: 'users',
  isPrivate: true,
  path: paths.root.users.index,
}

export { routerRootUsersConfig }
