import { FC } from 'react'

import { useMediaQuery } from '../../hooks'

import WebNavbar from './WebNavbar'
import TabletNavbar from './TabletNavbar'

const Navbar: FC = () => {
  const isTabletSize = useMediaQuery('(max-width: 1024px)')

  if (isTabletSize) return <TabletNavbar />

  return <WebNavbar />
}

export default Navbar