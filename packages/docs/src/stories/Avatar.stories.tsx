import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

type StoryType = StoryObj<AvatarProps>

const meta: Meta<AvatarProps> = {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Bonassa.png',
    alt: 'Renan Bonassa',
  },
}

export const Primary: StoryType = {}

export const WithFallback: StoryType = {
  args: {
    src: undefined,
  },
}

export default meta
