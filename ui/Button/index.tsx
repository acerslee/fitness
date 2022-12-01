import React, { FC } from 'react'

import { ButtonComp, ButtonLabel } from './_styles'
import { ButtonSize, ButtonProps, ButtonStyle } from './_types'

const Button: FC<ButtonProps> = ({
  label,
  size,
  buttonStyle,
  onClick,
  disabled = false,
}) => {
  const buttonSize: ButtonSize = size ?? 'small'

  return (
    <ButtonComp
      onClick={onClick}
      buttonSize={buttonSize}
      disabled={disabled}
    >
      <ButtonLabel>{label}</ButtonLabel>
    </ButtonComp>
  )
}

const getButtonStyle = (style: ButtonStyle) => {
  if (style === 'primary') return ''
}

export const PrimaryButton: FC<ButtonProps> = (props) => (
  <Button
    {...props}
    buttonStyle="primary"
  />
)

export const SecondaryButton: FC<ButtonProps> = (props) => (
  <Button
    {...props}
    buttonStyle="secondary"
  />
)

export default Button
