import '@/styles/font.css'
import '@/styles/globals.css'

import Header from '@/components/Header'

import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <Header />
    </NextUIProvider>
  )
}
