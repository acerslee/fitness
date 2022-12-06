import styled, { css } from 'styled-components'

import convertToRem from '../utils/convertToRem'
import { ButtonSize, ButtonStyle } from './_types'

const ButtonStyleTemplate = css`
  height: 3.25rem;
  border-radius: 0.75rem;
  &: hover {
    cursor: pointer;
  }
`

export const ButtonComp = styled('button')<{ buttonSize: ButtonSize }>`
  ${ButtonStyleTemplate};
  width: ${({ buttonSize }) =>
    (buttonSize === 'large' && convertToRem(196)) ||
    (buttonSize === 'medium' && convertToRem(146)) ||
    (buttonSize === 'small' && convertToRem(96))};
`

export const PrimaryButtonStyle = styled(ButtonComp)`
  background-color: #6495ed;
  border-color: #6495ed;
  color: white;
  transition: background-color 0.5s ease, border-color 0.5s ease;
  &: hover {
    background-color: #0047ab;
    border-color: #0047ab;
  }
`

export const SecondaryButtonStyle = styled(ButtonComp)`
  background-color: white;
  border-color: #6495ed;
  color: #6495ed;
  transition: color 0.5s ease, border-color 0.5s ease;
  &: hover {
    color: #0047ab;
    border-color: #0047ab;
  }
`

export const ErrorButtonStyle = styled(ButtonComp)``

export const ButtonLabel = styled('span')`
  font-size: 1rem;
`
