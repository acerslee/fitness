import React, { FC } from 'react'
import styled from 'styled-components'

import { ButtonSize, ButtonProps } from './_types'

const Button: FC<ButtonProps> = ({ label, size, onClick }) => {
  const buttonSize: ButtonSize = size ?? 'small'

  return (
    <ButtonComp onClick={onClick} buttonSize={buttonSize}>
      <ButtonLabel>
        {label}
      </ButtonLabel>
    </ButtonComp>
  )
}

const ButtonComp = styled('button')<{ buttonSize: ButtonSize }>`
  height: 3.25rem;
  border-radius: 0.75rem;
  width: ${({ buttonSize }) =>
    buttonSize === 'large' && '382px' ||
    buttonSize === 'medium' && '310px' ||
    buttonSize === 'small' && '272px'
  };
  background-color: orange;

  &: hover {
    cursor: pointer;
  }
`

const ButtonLabel = styled('span')`
  font-size: 1rem;
`

export default Button
