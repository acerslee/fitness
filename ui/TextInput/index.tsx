import { forwardRef } from 'react'
import styled from 'styled-components'

import { TextInputProps, InputSize } from './_types'

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { label, error, initialValue, size, onChange, password = false } = props

  return (
    <InputField size={size}>
      {error && <ErrorMessage>{error} </ErrorMessage>}
      {label && <Label>{label}</Label>}
      <input
        ref={ref}
        type={password ? 'password' : 'text'}
        maxLength={20}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        defaultValue={initialValue}
      />
    </InputField>
  )
})

const InputField = styled('div')<{ size: InputSize }>`
  display: flex;
  flex-direction: column;
  width: ${({ size }) =>
    (size === 'large' && '382px') ||
    (size === 'medium' && '310px') ||
    (size === 'small' && '272px') ||
    (size === 'full' && '100%')};
`

const Label = styled('span')`
  font-size: 1rem;
`

const ErrorMessage = styled('span')`
  font-size: 1rem;
  color: red;
`

export default TextInput
