import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { menuConfig } from '@/app/config/menu'
import { withRenderLog } from '@/shared/render-log'
import { useRoutingContext } from '@/shared/routing'

const Menu: FC = () => {
  const { authed } = useRoutingContext()

  return menuConfig
    .filter(({ isPrivate, isPublicOnly }) => {
      if (isPrivate && !authed) return false
      return !(isPublicOnly && authed)
    })
    .map(({ id, path, title }) => (
      <NavLink
        key={id}
        to={path}
        className="m-2 block text-blue-400 hover:text-blue-200 [&.active]:text-red-400 [&.active]:underline [&.active]:hover:cursor-default"
      >
        {title}
      </NavLink>
    ))
}

export default withRenderLog(Menu)
