import React, { FC, ReactNode } from 'react'
import Container from 'react-bootstrap/Container'

interface Props {
  children: ReactNode
}

const WebContainer: FC<Props> = ({ children }) => {
  return <Container fluid="xl">{children}</Container>
}

export default WebContainer
