import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router'

import { userListMock } from '@/entities/user-list'
import { StoryList } from '@/modules/story-list'
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
        <FadeContainer id="moderation-user-not-found">
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-y-auto p-8">
            <h2 className="text-2xl font-bold text-white">User not found</h2>
          </div>
        </FadeContainer>
      </>
    )

  return (
    <>
      <Helmet>
        <title>User {user.name}</title>
      </Helmet>
      <FadeContainer id={`moderation-user-${userId}`}>
        <div className="absolute left-0 top-0 h-full w-full overflow-y-auto p-8">
          <h2 className="mb-8 text-2xl font-bold text-white">{user.name}</h2>
          <StoryList renderLogId={`moderation-${userId}`} {...{ userId }} />
        </div>
      </FadeContainer>
    </>
  )
}

export default withRenderLog(User)
