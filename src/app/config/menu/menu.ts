import { paths } from '@/app/config/paths'

type MenuItemConfig = {
  id: string
  path: string
  title: string
  isPrivate?: boolean
  isPublicOnly?: boolean
}

const menuConfig: MenuItemConfig[] = [
  {
    id: 'home',
    path: paths.root.index,
    title: 'Home (public)',
  },
  {
    id: 'about',
    path: paths.root.about.index,
    title: 'About (public)',
  },
  {
    id: 'moderation',
    isPrivate: true,
    path: paths.root.moderation.index,
    title: 'Moderation (private)',
  },
  {
    id: 'users',
    isPrivate: true,
    path: paths.root.users.index,
    title: 'Users (private)',
  },
  {
    id: 'logout',
    isPrivate: true,
    path: paths.root.logout.index,
    title: 'Logout',
  },
  {
    id: 'login',
    isPublicOnly: true,
    path: paths.root.login.index,
    title: 'Login',
  },
]

export { menuConfig }
