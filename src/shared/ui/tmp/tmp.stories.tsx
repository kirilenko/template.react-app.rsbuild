import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Tmp } from '.'

const ActionsData = {
  handleClick: fn(),
}

const story: Meta<typeof Tmp> = {
  args: { ...ActionsData },
  component: Tmp,

  // Export all the stories except the ActionsData.
  // It can be defined also as a regexp, like this: /.*Data$/
  excludeStories: ['ActionsData'],
  title: 'Tmp',
}

export const WithoutTitle: StoryObj<typeof Tmp> = {
  args: {
    // title: 'T',
  },
  // name: 'Custom Name',
  // render: (props) => <Tmp {...props} />, // This is the default render function.
}

export const WithTitle: StoryObj<typeof Tmp> = {
  args: {
    title: 'Some title',
  },
}

export { ActionsData }
export default story
