import { paths } from '@/app/config/paths'
import { RouteObjectWithAuth } from '@/shared/router'

const routerRootUsersUserCirclesConfig: RouteObjectWithAuth = {
  children: [
    {
      id: 'users-user-circles-index',
      index: true,
      isPrivate: true,
      lazy: async () => ({
        Component: (
          await import('@/pages/root/users/user/circles/circles-index')
        ).CirclesIndex,
      }),
    },
  ],
  id: 'users-user-circles',
  isPrivate: true,
  lazy: async () => ({
    Component: (await import('@/pages/root/users/user/circles')).Circles,
  }),
  path: paths.root.users.user.circles.index,
}

export { routerRootUsersUserCirclesConfig }
