import React, { FC } from 'react'
import { TextProps, TextSize } from '../_types'

import { B1Style, B2Style, B3Style, B4Style, B5Style } from './_styles'

const BodyText: FC<TextProps> = ({ size, children }) => {
  const BodyStyle = getBodyStyle(size)

  return <BodyStyle>{children}</BodyStyle>
}

const getBodyStyle = (size: TextSize) => {
  if (size === 1) return B1Style
  if (size === 2) return B2Style
  if (size === 3) return B3Style
  if (size === 4) return B4Style
  return B5Style
}

export const B1: FC<TextProps> = (props) => (
  <BodyText
    {...props}
    size={1}
  />
)
export const B2: FC<TextProps> = (props) => (
  <BodyText
    {...props}
    size={2}
  />
)
export const B3: FC<TextProps> = (props) => (
  <BodyText
    {...props}
    size={3}
  />
)
export const B4: FC<TextProps> = (props) => (
  <BodyText
    {...props}
    size={4}
  />
)
export const B5: FC<TextProps> = (props) => (
  <BodyText
    {...props}
    size={5}
  />
)
