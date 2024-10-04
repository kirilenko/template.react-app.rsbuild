import { FC } from 'react'
import { Outlet } from 'react-router'

import { UserList } from '@/modules/user-list'
import { FadeContainer } from '@/shared/animation'

const Users: FC = () => (
  <FadeContainer id="users">
    <div className="absolute left-0 top-0 flex h-full w-full flex-col items-stretch justify-stretch overflow-y-auto bg-stone-800">
      <div className="flex flex-1 items-stretch justify-stretch">
        <UserList />
        <div className="relative flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  </FadeContainer>
)

export { Users }
