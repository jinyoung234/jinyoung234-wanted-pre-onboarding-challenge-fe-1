import React from 'react'
import {InputProps} from './type'

function Input({connectRef, isEnter, pwRef, ...rest}: InputProps) {
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') pwRef?.current?.focus()
  }
  return (
    <input
      ref={e => connectRef?.(e as HTMLInputElement)}
      onKeyDown={isEnter ? e => handleEnter(e) : undefined}
      {...rest}
    />
  )
}

export default Input
