import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

type StoryType = StoryObj<TextInputProps>

const meta: Meta<TextInputProps> = {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
}

export const Primary: StoryType = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: StoryType = {
  args: {
    prefix: 'cal.com/',
  },
}

export const Disabled: StoryType = {
  args: {
    disabled: true,
  },
}

export default meta
