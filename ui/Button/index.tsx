import React, { FC, forwardRef } from 'react'

import {
  ButtonLabel,
  PrimaryButtonStyle,
  SecondaryButtonStyle,
} from './_styles'
import { ButtonSize, ButtonProps, ButtonStyle } from './_types'

const Button = forwardRef<HTMLButtonElement ,ButtonProps>(({
  label,
  size,
  buttonStyle,
  onClick,
  disabled = false,
}, ref) => {
  const buttonSize: ButtonSize = size ?? 'small'

  const ButtonStyle = getButtonStyle(buttonStyle)

  return (
    <ButtonStyle
      ref={ref}
      onClick={onClick}
      buttonSize={buttonSize}
      disabled={disabled}
    >
      <ButtonLabel>{label}</ButtonLabel>
    </ButtonStyle>
  )
})

const getButtonStyle = (style: ButtonStyle) => {
  if (style === 'primary') return PrimaryButtonStyle

  return SecondaryButtonStyle
}

type StrippedProps = Pick<
  ButtonProps,
  'onClick' | 'disabled' | 'label' | 'size' | 'type'
>

export const PrimaryButton: FC<StrippedProps> = (props) => (
  <Button
    {...props}
    buttonStyle="primary"
  />
)

export const SecondaryButton: FC<StrippedProps> = (props) => (
  <Button
    {...props}
    buttonStyle="secondary"
  />
)

export const ErrorButton: FC<StrippedProps> = (props) => (
  <Button
    {...props}
    buttonStyle="error"
  />
)

export default Button
