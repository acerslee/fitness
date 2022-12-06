import { FC, useState } from 'react'
import Image from 'next/image'

import WebContainer from '../../ui/Container'

import hamburger from '../../assets/images/hamburger.png'
import vector from '../../assets/images/vector.png'
import styled from 'styled-components'

const TabletNavbar: FC = () => {
  const [toggleHamburger, setToggleHamburger] = useState<boolean>(true)

  const toggleNavMenu = (): void => {
    setToggleHamburger(false)
    const element = document.getElementById('nav_menu')
    element?.classList.toggle('active')
  }

  const closeMenu = (): void => {
    setToggleHamburger(true)
    const element = document.getElementById('nav_menu')
    element?.classList.remove('active')
  }

  return (
    <WebContainer>
      <TabletHeader>
        <Image
          src=""
          alt="shortcut to home page"
        />
        <Image
          src={toggleHamburger ? hamburger : vector}
          alt="toggle menu"
          onClick={() => {
            if (toggleHamburger) {
              toggleNavMenu()
            } else {
              closeMenu()
            }
          }}
          height={16.67}
          width={16.67}
        />
      </TabletHeader>
    </WebContainer>
  )
}

const TabletHeader = styled('header')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default TabletNavbar
