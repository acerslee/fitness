import React, { FC } from 'react'
import styled from 'styled-components'
import { Nav as BootstrapNav } from 'react-bootstrap'

import { useMediaQuery } from '../../../hooks'

import PreAuthButtons from './PreauthButtons'

const NavItems: FC = () => {
  const isTabletSize = useMediaQuery('(max-width: 1024px)')

  return (
    <Nav>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      {!isTabletSize && <PreAuthButtons />}
    </Nav>
  )
}

const Nav = styled(BootstrapNav)`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const Link = styled(Nav.Link)`
  transition: text-decoration 0.5s ease;
  &: hover {
    text-decoration: underline;
  }
`

export default NavItems
