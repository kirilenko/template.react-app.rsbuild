import { paths } from '@/app/config/paths'

type MenuItemConfig = {
  id: string
  path: string
  title: string
}

const menuConfig: MenuItemConfig[] = [
  {
    id: 'home',
    path: paths.root.index,
    title: 'Home',
  },
  {
    id: 'about',
    path: paths.root.about.index,
    title: 'About',
  },
  {
    id: 'users',
    path: paths.root.users.index,
    title: 'Users',
  },
]

export { menuConfig }
