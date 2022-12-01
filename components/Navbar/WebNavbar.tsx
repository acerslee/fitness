import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Col from 'react-bootstrap/Col'

import WebContainer from '../../ui/Container'

import NavItems from './navItems'

const WebNavbar: FC = () => {
  return (
    <WebContainer>
      <header>
        <Image
          src=""
          alt="shortcut to home page"
        />
        <Col
          xs={'auto'}
          md={4}
          lg={4}
        >
          <NavItems />
        </Col>
      </header>
    </WebContainer>
  )
}

export default WebNavbar
