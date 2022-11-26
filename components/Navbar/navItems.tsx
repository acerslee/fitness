import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  @media (max-width: 1024px) {
    height: 100vh;
    display: none;
    position: fixed;
    top: 6rem;
    left: 0rem;
    z-index: 3;
  }
`

const NavItem = styled.li`
  list-style: none;
  margin-left: 3em;
  @media (max-width: 1024px) {
    padding-top: 3em;
  }
`

const NavText = styled.span`
  text-decoration: underline 0.15em rgba(0, 0, 0, 0);
  font-size: 1rem;
  &: hover {
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`

const NavItems: FC = () => {
  return (
    <NavMenu id="nav_menu">
      <NavItem className="nav_item">
        <Link href="/about">
          <NavText>About</NavText>
        </Link>
      </NavItem>
      <NavItem className="nav_item">
        <Link href="/contact">
          <NavText>Contact</NavText>
        </Link>
      </NavItem>
    </NavMenu>
  )
}

export default NavItems
