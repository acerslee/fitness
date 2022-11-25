import { forwardRef } from "react";
import styled from 'styled-components'

import { TextInputProps, InputSize } from "./_types";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { label, error, initialValue, size} = props
  return (
    <InputField size={size}>
      {label &&
        <Label>{label}</Label>
      }
      <input
        ref={ref}
        type={'text'}
      />
    </InputField>
  )
})

const InputField = styled('div')<{size: InputSize}>`
  display: flex;
  flex-direction: column;
`

const Label = styled('span')`
  font-size: 1rem;
`


export default TextInput