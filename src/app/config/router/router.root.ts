import { paths } from '@/app/config/paths'
import { Root } from '@/pages/root'
import { Home } from '@/pages/root/home'
import { Login } from '@/pages/root/login'
import { RouteObjectWithAuth } from '@/shared/router'
import { routerRootAboutConfig } from './router.root.about'
import { routerRootUsersConfig } from './router.root.users'

const routerRootConfig: RouteObjectWithAuth[] = [
  {
    Component: Root,
    children: [
      routerRootAboutConfig,
      {
        Component: Home,
        id: 'home',
        index: true,
      },
      {
        Component: Login,
        id: 'login',
        isPublicOnly: true,
        path: paths.root.login.index,
      },
      {
        id: 'logout',
        isPrivate: true,
        lazy: async () => ({
          Component: (await import('@/pages/root/logout')).Logout,
        }),
        path: paths.root.logout.index,
      },
      {
        id: 'restore',
        isPublicOnly: true,
        lazy: async () => ({
          Component: (await import('@/pages/root/restore')).Restore,
        }),
        path: paths.root.restore.index,
      },
      routerRootUsersConfig,
    ],
    id: 'root',
    path: paths.root.index,
  },
  {
    id: 'no-match',
    lazy: async () => ({
      Component: (await import('@/pages/root/no-match')).NoMatch,
    }),
    path: '*',
  },
]

export { routerRootConfig }
