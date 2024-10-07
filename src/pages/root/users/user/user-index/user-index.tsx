import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router'

import { userListMock } from '@/entities/user-list'
import { withRenderLog } from '@/shared/render-log'

const UserIndex: FC = () => {
  const { userId } = useParams()

  const user = userListMock.find(({ id }) => id === userId) || null

  if (!user) return null

  return (
    <>
      <Helmet>
        <title>User {user.name}</title>
      </Helmet>
      <div className="left-0 top-0 flex h-full w-full items-center justify-center">
        <h1>UserIndex</h1>
      </div>
    </>
  )
}

export default withRenderLog(UserIndex)
