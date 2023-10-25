'use client'

import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback, useMemo, useState } from 'react'

import { cn } from '@/utils/cn'

import logoWhite from '../../../public/logo-White.png'
import style from './style.module.css'

const Header = () => {
  const { t } = useTranslation('home')
  const [tab, setTab] = useState('Home')

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
      if (tab !== key) {
        setTab(key)
      }

      document.querySelector(`#${key}`)?.scrollIntoView({ behavior: 'smooth' })
    },
    [tab],
  )

  return (
    <div className={cn('fixed top-0 w-full', style.wrapper)}>
      <div className="mx-auto flex h-[76px] w-container items-center">
        <Image
          src={logoWhite}
          alt="museee"
          className="ml-7 h-4 w-[87px]"
        />
        <ul className="flex flex-1 cursor-pointer items-center justify-center gap-16">
          {navs.map((nav) => (
            <li
              className={cn(
                style.nav,
                tab === nav.key ? style.active : undefined,
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
