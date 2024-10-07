import { Paths } from '@/shared/router'

const paths = {
  root: {
    about: {
      achievements: { index: 'achievements' },
      index: 'about',
      intention: { index: 'intention' },
    },
    index: '/',
    login: { index: 'login' },
    logout: { index: 'logout' },
    moderation: {
      index: 'moderation',
      user: { index: ':userId' },
    },
    restore: { index: 'restore' },
    users: {
      index: 'users',
      user: {
        circles: {
          circle: { index: ':circleId' },
          index: 'circles',
        },
        index: ':userId',
      },
    },
  },
} satisfies Paths

export { paths }
