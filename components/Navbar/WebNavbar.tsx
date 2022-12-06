import { FC } from 'react'
import Image from 'next/image'
import { Navbar } from 'react-bootstrap'

import WebContainer from '../../ui/Container'

import NavItems from './components/navItems'

const WebNavbar: FC = () => {
  return (
    <WebContainer>
      <Navbar>
        <Navbar.Brand href="/">
          <Image
            src=""
            alt="shortcut to home page"
          />
        </Navbar.Brand>
        <NavItems />
      </Navbar>
    </WebContainer>
  )
}


export default WebNavbar
