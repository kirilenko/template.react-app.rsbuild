type MenuItemConfig = {
  id: string
  path: string
  title: string
}

const menuConfig: MenuItemConfig[] = [
  {
    id: 'home',
    path: '/',
    title: 'Home',
  },
  {
    id: 'about',
    path: '/about',
    title: 'About',
  },
  {
    id: 'contacts',
    path: '/contacts',
    title: 'Contacts',
  },
]

export { menuConfig }
