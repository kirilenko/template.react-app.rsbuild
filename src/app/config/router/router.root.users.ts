import { paths } from '@/app/config/paths'
import { Users } from '@/pages/root/users'
import { RouteObjectWithAuth } from '@/shared/router'

const routerRootUsersConfig: RouteObjectWithAuth = {
  Component: Users,
  children: [
    {
      id: 'user',
      isPrivate: true,
      lazy: async () => ({
        Component: (await import('@/pages/root/users/user')).User,
      }),
      path: paths.root.users.user.index,
    },
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
