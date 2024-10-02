import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router'
import { loremIpsum } from 'lorem-ipsum'

import { userListMock } from '@/entities/user-list'
import { FadeContainer } from '@/shared/animation'

const User: FC = () => {
  const { userId } = useParams()

  const user = userListMock.find(({ id }) => id === userId) || null

  if (!user) return null

  return (
    <>
      <Helmet>
        <title>User {user.name}</title>
      </Helmet>
      <FadeContainer id={`user-${userId}`}>
        <div className="absolute left-0 top-0 h-full w-full overflow-y-auto p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">{user.name}</h2>
          {loremIpsum({ count: 5, units: 'paragraphs' })}
        </div>
      </FadeContainer>
    </>
  )
}

export { User }
