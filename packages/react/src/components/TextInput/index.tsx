import { ComponentProps, forwardRef, ElementRef } from 'react'
import { VariantProps } from '@stitches/react'
import { TextInputContainer, Prefix, Input } from './styles'

export type TextInputProps = Omit<ComponentProps<typeof Input>, 'size'> & {
  prefix?: string
  size?: VariantProps<typeof TextInputContainer>['size']
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  (
    { prefix, size, ...props },
    ref
  ) => {
  return (
    <TextInputContainer size={size}>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...props} />
    </TextInputContainer>
  )
})

TextInput.displayName = 'TextInput'