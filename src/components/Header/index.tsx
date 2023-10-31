'use client'

import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import React, { useCallback, useMemo, useState } from 'react'

import { cn } from '@/utils/cn'
import { Button } from '@nextui-org/react'

import logoWhite from '../../../public/logo-White.png'
import Close from './Close.svg'
import Menu from './menu.svg'
import style from './style.module.scss'

const Header = () => {
  const { t } = useTranslation('home')
  const [tab, setTab] = useState('Home')
  const [open, setOpen] = useState(false)

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
      setOpen(false)
      document.querySelector(`#${key}`)?.scrollIntoView({ behavior: 'smooth' })
    },
    [tab],
  )

  return (
    <div className="blur-background fixed top-0 w-full">
      <div className={style.header}>
        <Image
          src={logoWhite}
          alt="museee"
          className="ml-7 h-4 w-[87px]"
        />

        <Button
          isIconOnly
          className={style.menuButton}
          onClick={() => {
            setOpen((state) => !state)
          }}
        >
          {open ? <Close /> : <Menu />}
        </Button>

        <ul className={cn(style.menu, open && style.open)}>
          {navs.map((nav) => (
            <li
              className={cn(
                style.menuItem,
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
