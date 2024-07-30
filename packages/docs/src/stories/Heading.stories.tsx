import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@bonassa-ui/react'

type StoryType = StoryObj<HeadingProps>

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum',
  },
}

export const Primary: StoryType = {}

export const CustomTag: StoryType = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}

export default meta
