import { lazy } from 'react'

import { paths } from '@/app/config/paths'
import { RouteConfig } from '@/shared/routing'

const about: RouteConfig = {
  component: lazy(() => import('@/pages/about')),
  id: 'about',
  isLazy: true,
  nestedRouteConfig: {
    aboutIndex: {
      component: lazy(() => import('@/pages/about/about-index')),
      id: 'aboutIndex',
      index: true, // - w/o path
      isLazy: true,
    },
    achievements: {
      component: lazy(() => import('@/pages/about/achievements')),
      id: 'achievements',
      isLazy: true,
      path: paths.root.about.achievements.index,
    },
    intention: {
      component: lazy(() => import('@/pages/about/intention')),
      id: 'intention',
      isLazy: true,
      path: paths.root.about.intention.index,
    },
  },
  path: paths.root.about.index,
}

export { about }
