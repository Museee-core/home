'use client'

import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback, useMemo } from 'react'

import { cn } from '@/utils/cn'
import useLayoutEffect from '@/utils/useIsomorphicLayoutEffect'

import logoWhite from '../../../public/logo-White.png'

import style from './style.module.css'

const Header = () => {
  const router = useRouter()
  const { t } = useTranslation('home')

  const navs = useMemo(
    () => [
      { key: 'Home', label: t('nav.home') },
      { key: 'Superiority', label: t('nav.superiority') },
      { key: 'ServiceProcess', label: t('nav.serviceProcess') },
      { key: 'ContactUs', label: t('nav.contactUs') },
    ],
    [t],
  )

  const handleNav = useCallback(
    (key: string) => () => {
      if (router.query.tab !== key) {
        router.replace({
          pathname: router.pathname,
          query: { tab: key },
        })
      }
    },
    [router],
  )

  useLayoutEffect(() => {
    if (router.query.tab) {
      document.querySelector(`#${router.query.tab}`)?.scrollIntoView()
    }
  }, [router.query.tab])

  return (
    <div className="fixed top-0 w-full">
      <div className="mx-auto flex h-[76px] w-container items-center">
        <Image
          id="Home"
          src={logoWhite}
          alt="museee"
          className="ml-7 h-4 w-[87px]"
        />
        <ul className="flex flex-1 cursor-pointer items-center justify-center gap-16">
          {navs.map((nav) => (
            <li
              className={cn(
                style.nav,
                router.query.tab === nav.key ? style.active : undefined,
              )}
              key={nav.key}
              onClick={handleNav(nav.key)}
            >
              {nav.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
