import { FC } from "react"
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Footer: FC = () => {
  const router = useRouter()

  const isMainPage = router.pathname === '/'
  const isLoginPage = router.pathname === '/login'

  const doNotRenderFooter = isMainPage || isLoginPage

  if (doNotRenderFooter) return null

  return (
    <FooterContainer>
      hello
    </FooterContainer>
  )
}

const FooterContainer = styled('footer')`
  background-color: black;
  height: 300px;
`

export default Footer