import { paths } from '@/app/config/paths'
import { About } from '@/pages/root/about'
import { RouteObjectWithAuth } from '@/shared/router'

const routerRootAboutConfig: RouteObjectWithAuth = {
  Component: About,
  children: [
    {
      id: 'about-index',
      index: true,
      lazy: async () => ({
        Component: (await import('@/pages/root/about/about-index')).AboutIndex,
      }),
    },
    {
      id: 'about-achievements',
      lazy: async () => ({
        Component: (await import('@/pages/root/about/achievements'))
          .Achievements,
      }),
      path: paths.root.about.achievements.index,
    },
    {
      id: 'about-intention',
      lazy: async () => ({
        Component: (await import('@/pages/root/about/intention')).Intention,
      }),
      path: paths.root.about.intention.index,
    },
  ],
  id: 'about',
  path: paths.root.about.index,
}

export { routerRootAboutConfig }
