import { FC, useState } from 'react'
import Image from 'next/image'

import WebContainer from '../../ui/Container'

import hamburger from '../../assets/images/hamburger.png'
import vector from '../../assets/images/vector.png'

const TabletNavbar: FC = () => {
  const [toggleHamburger, setToggleHamburger] = useState<boolean>(false)

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
      <header>
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
        />
      </header>
    </WebContainer>
  )
}

export default TabletNavbar
