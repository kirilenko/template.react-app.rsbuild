type StoryListItemModel = {
  id: string
  content: string
  title: string
  userId: string
}

type StoryListModel = StoryListItemModel[]

export type { StoryListModel }
