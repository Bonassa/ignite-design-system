import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@bonassa-ui/react'

type StoryType = StoryObj<TextProps>

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
}

export const Primary: StoryType = {}

export const CustomTag: StoryType = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

export default meta
