import { FC } from 'react'

import { storyListMock, StoryListModel } from '@/entities/story-list'
import { withRenderLog } from '@/shared/render-log'

type Props = {
  userId: string
}

const StoryList: FC<Props> = ({ userId }) => {
  const storyList: StoryListModel = storyListMock.filter(
    (p) => p.userId === userId,
  )

  if (!storyList.length) {
    return (
      <div className="mb-4 border-b border-stone-500 py-4">
        <div className="text-white">No stories found</div>
      </div>
    )
  }

  return storyList.map((story) => (
    <div key={story.id} className="mb-4 border-b border-stone-500 py-4">
      <div className="mb-2 font-bold text-white">{story.title}</div>
      <div className="text-white">{story.content}</div>
    </div>
  ))
}

export default withRenderLog(StoryList)
