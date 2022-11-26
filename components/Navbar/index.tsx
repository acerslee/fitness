import { useState, useEffect, FC } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import Image from 'next/image'

import { useMediaQuery } from '../../hooks'

import hamburger from '../../assets/images/hamburger.png'
import vector from '../../assets/images/vector.png'

import NavItems from './navItems'

const Navbar: FC = () => {
  const [toggleHamburger, setToggleHamburger] = useState<boolean>(true)

  const isTabletSize = useMediaQuery('(max-width: 1024px)')

  useEffect(() => {
    const element = document.getElementById('nav_menu')
    const status = element?.classList.contains('active')
    if (!status && !toggleHamburger) {
      setToggleHamburger(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTabletSize])

  const toggleNavMenu = (): void => {
    setToggleHamburger(!toggleHamburger)
    const element = document.getElementById('nav_menu')
    element?.classList.toggle('active')
  }

  const closeMenu = (): void => {
    setToggleHamburger(!toggleHamburger)
    const element = document.getElementById('nav_menu')
    element?.classList.remove('active')
  }

  if (isTabletSize) {
    const item = document.querySelectorAll('.nav_item')
    item.forEach((n) => n.addEventListener('click', closeMenu))
  }

  return (
    <Header
      fluid="md"
      sm={4}
      md={8}
      lg={12}
    >
      <Nav>
        {isTabletSize ? (
          <NavItems />
        ) : (
          <Col
            xs={'auto'}
            md={4}
            lg={4}
          >
            <NavItems />
          </Col>
        )}

        {/* Convert to hamburger style menu when resolution is tablet size or smaller */}
        {isTabletSize && (
          <RightNavItem
            sm={2}
            md={4}
          >
            <Image
              src={toggleHamburger ? hamburger : vector}
              alt="App navbar icon to show or hide the nav items when clicked"
              width={toggleHamburger ? 21 : 15.33}
              height={toggleHamburger ? 14 : 16.33}
              onClick={() => toggleNavMenu()}
            />
          </RightNavItem>
        )}
      </Nav>
    </Header>
  )
}

const Header = styled(Container)`
  @media (max-width: 1440px) {
    max-width: 90%;
  }
  @media (max-width: 1024px) {
    & .active {
      display: block;
    }
  }
`

const Nav = styled(Row)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #aeb6c6;
`

const RightNavItem = styled(Col)`
  align-self: center;
  text-align: right;
`

export default Navbar
