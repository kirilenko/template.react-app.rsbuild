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
    restore: { index: 'restore' },
    users: {
      index: 'users',
      user: { index: ':userId' },
    },
  },
} satisfies Paths

export { paths }
