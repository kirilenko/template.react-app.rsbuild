import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { userListMock } from '@/entities/user-list'
import { withRenderLog } from '@/shared/render-log'

const UserList: FC = () => (
  <div className="w-[256px] flex-none border-r border-stone-400 p-8">
    {userListMock.map((user) => (
      <NavLink
        className="m-2 block text-blue-400 hover:text-blue-200 [&.active]:text-red-400 [&.active]:underline [&.active]:hover:cursor-default"
        key={user.id}
        to={user.id}
      >
        <div className="mb-6 font-bold">{user.name}</div>
      </NavLink>
    ))}
  </div>
)

export default withRenderLog(UserList)
