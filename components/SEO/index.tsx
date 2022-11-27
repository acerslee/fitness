import Head from 'next/head'
import React, { FC, useCallback } from 'react'
import { useRouter } from 'next/router'

const SEO: FC = () => {
  const router = useRouter()

  const dynamicTitle = useCallback((): string => {
    if (router.pathname.includes('/login')) return 'Login'
    if (router.pathname.includes('/create')) return 'Registration'

    return 'Fitness App'
  }, [router.pathname])

  return (
    <Head>
      <title>{dynamicTitle()}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <meta
        name="description"
        content="Fitness app"
      />
      <meta charSet="UTF-8"></meta>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="/site.webmanifest"
      />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta
        name="msapplication-TileColor"
        content="#da532c"
      />
      <meta
        name="theme-color"
        content="#ffffff"
      />
    </Head>
  )
}

export default SEO
