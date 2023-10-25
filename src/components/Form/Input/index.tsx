import React from 'react'

interface InputProps<T> {
  onChange?: (e: T) => void
}

const Input: React.FC<InputProps<string>> = (props) => {
  return (
    <input
      onChange={(evt) => {
        props.onChange?.(evt.target.value)
      }}
    />
  )
}

export default Input
