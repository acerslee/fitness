import React, { FC } from 'react'
import { TextProps, TextSize } from '../_types'
import { H1Style, H2Style, H3Style, H4Style, H5Style } from './_styles'

const HeadingText: FC<TextProps> = ({ size, children }) => {
  const HeadingStyle = getHeadingStyle(size)

  return <HeadingStyle>{children}</HeadingStyle>
}

const getHeadingStyle = (size: TextSize) => {
  if (size === 1) return H1Style
  if (size === 2) return H2Style
  if (size === 3) return H3Style
  if (size === 4) return H4Style
  return H5Style
}

export const H1: FC<TextProps> = (props) => (
  <HeadingText
    {...props}
    size={1}
  />
)
export const H2: FC<TextProps> = (props) => (
  <HeadingText
    {...props}
    size={2}
  />
)
export const H3: FC<TextProps> = (props) => (
  <HeadingText
    {...props}
    size={3}
  />
)
export const H4: FC<TextProps> = (props) => (
  <HeadingText
    {...props}
    size={4}
  />
)
export const H5: FC<TextProps> = (props) => (
  <HeadingText
    {...props}
    size={5}
  />
)
