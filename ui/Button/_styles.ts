import styled from 'styled-components'

import { ButtonSize } from './_types'

const ButtonStyleTemplate = `
  height: 3.25rem;
  border-radius: 0.75rem;
  &: hover {
    cursor: pointer;
  }
`

export const ButtonComp = styled('button')<{ buttonSize: ButtonSize }>`
  ${ButtonStyleTemplate};
  width: ${({ buttonSize }) =>
    (buttonSize === 'large' && '382px') ||
    (buttonSize === 'medium' && '310px') ||
    (buttonSize === 'small' && '272px')};
`

export const ButtonLabel = styled('span')`
  font-size: 1rem;
`
