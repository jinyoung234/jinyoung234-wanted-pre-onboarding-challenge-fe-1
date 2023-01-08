import React from 'react'
import {UseFormRegister} from 'react-hook-form'
import {InputProps} from './type'

const Input = React.forwardRef<HTMLInputElement, InputProps & ReturnType<UseFormRegister<any>>>(
  ({isTodo, inputValue, disabled, connectRef, isEnter, pwRef, ...rest}: InputProps, ref) => {
    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') pwRef?.current?.focus()
    }
    return (
      <>
        {isTodo && typeof isTodo === 'boolean' ? (
          <input ref={ref} defaultValue={inputValue} disabled={typeof disabled === 'boolean' && disabled} {...rest} />
        ) : (
          <input ref={ref} onKeyDown={isEnter ? e => handleEnter(e) : undefined} {...rest} />
        )}
      </>
    )
  },
)

Input.displayName = 'input'

export default Input
