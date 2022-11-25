import { FC } from "react"

const Footer: FC = () => {
  const isMainPage = window.location.href === '/'
  const isLoginPage = window.location.href === '/login'

  const doNotRenderFooter = isMainPage || isLoginPage


  if (doNotRenderFooter) return null

  return (
    <footer>

    </footer>
  )
}

export default Footer