import { ReactNode } from 'react'

export type TextSize = 1 | 2 | 3 | 4 | 5

export interface TextProps {
  children: ReactNode
  size: TextSize
}
