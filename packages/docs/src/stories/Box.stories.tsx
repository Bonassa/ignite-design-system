import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

type StoryType = StoryObj<BoxProps>

const meta: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento box</Text>,
  },
}

export const Primary: StoryType = {}

export default meta
