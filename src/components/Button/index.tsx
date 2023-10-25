import React from 'react'

import { cn } from '@/utils/cn'

import style from './style.module.css'

interface ButtonProps extends React.PropsWithChildren {
  loading?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  loading,
  className,
  disabled,
  onClick,
  children,
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        style.button,
        className,
        loading ? 'cursor-wait' : undefined,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
