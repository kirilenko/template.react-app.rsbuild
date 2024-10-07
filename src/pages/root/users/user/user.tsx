import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet, useParams } from 'react-router'
import { NavLink } from 'react-router-dom'

import { paths } from '@/app/config/paths'
import { userListMock } from '@/entities/user-list'
import { FadeContainer } from '@/shared/animation'
import { withRenderLog } from '@/shared/render-log'

const User: FC = () => {
  const { userId } = useParams()

  const user = userListMock.find(({ id }) => id === userId) || null

  if (!user || !userId)
    return (
      <>
        <Helmet>
          <title>User not found</title>
        </Helmet>
        <FadeContainer id="user-not-found">
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-y-auto p-8">
            <h2 className="text-2xl font-bold text-white">User not found</h2>
          </div>
        </FadeContainer>
      </>
    )

  return (
    <FadeContainer id={`user-${userId}`}>
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-stretch justify-stretch overflow-y-auto p-8">
        <h2 className="mb-2 flex-none text-2xl font-bold text-white">
          {user.name}
        </h2>
        <div className="flex-none">
          <NavLink
            className="my-2 block text-blue-400 hover:text-blue-200 [&.active]:text-red-400 [&.active]:underline [&.active]:hover:cursor-default"
            to={paths.root.users.user.circles.index}
          >
            Circles
          </NavLink>
        </div>
        <div className="relative flex-auto">
          <Outlet />
        </div>
      </div>
    </FadeContainer>
  )
}

export default withRenderLog(User)
