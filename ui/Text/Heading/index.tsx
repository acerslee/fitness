import React, { FC } from 'react'
import { TextProps } from '../_types'

import styled from 'styled-components'

const HeadingText: FC<TextProps> = ({ children }) => {
  return <span>{children}</span>
}

const HeadingTextContainer = styled.span``

export default HeadingText
