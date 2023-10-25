import React from 'react'

import { cn } from '@/utils/cn'

import style from './style.module.css'

interface ButtonProps extends React.PropsWithChildren {
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button
      className={cn(style.button, className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
