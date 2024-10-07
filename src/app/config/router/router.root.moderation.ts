import { paths } from '@/app/config/paths'
import { Moderation } from '@/pages/root/moderation'
import { RouteObjectWithAuth } from '@/shared/router'

const routerRootModerationConfig: RouteObjectWithAuth = {
  Component: Moderation,
  children: [
    {
      id: 'moderation-user',
      isPrivate: true,
      lazy: async () => ({
        Component: (await import('@/pages/root/moderation/user')).User,
      }),
      path: paths.root.moderation.user.index,
    },
    {
      id: 'moderation-index',
      index: true,
      isPrivate: true,
      lazy: async () => ({
        Component: (await import('@/pages/root/moderation/moderation-index'))
          .ModerationIndex,
      }),
    },
  ],
  id: 'moderation',
  isPrivate: true,
  path: paths.root.moderation.index,
}

export { routerRootModerationConfig }
