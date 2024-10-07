import { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'

import { menuConfig } from '@/app/config/menu'
import { withRenderLog } from '@/shared/render-log'
import { useRouterContext } from '@/shared/router'

const Menu: FC = () => {
  const { authed } = useRouterContext()

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

export default memo(withRenderLog(Menu))
