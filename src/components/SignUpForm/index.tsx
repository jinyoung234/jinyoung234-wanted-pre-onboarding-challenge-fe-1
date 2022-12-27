import React from 'react'
import {useForm} from 'react-hook-form'
import {getSignUp} from '../../api/auth'
import {emailRegex} from '../../utils/regex'
import {IFormData} from './type'

function SignUpForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormData>()
  const onValid = (data: IFormData) => {
    getSignUp({email: data.id, password: data.pw}).then(res => {
      if (res?.status === 200) window.location.href = 'auth/login'
    })
  }
  const idRegister = register('id')
  const {ref: pw, ...pwRest} = register('pw')
  const pwRef = React.useRef<HTMLInputElement | null>(null)
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') pwRef?.current?.focus()
  }
  return (
    <>
      <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onValid)}>
        <label htmlFor='id'>ID</label>
        <input onKeyDown={e => handleEnter(e)} {...idRegister} type='text' id='id' />
        {errors && <span>{errors?.id?.message}</span>}
        <label htmlFor='pw'>PW</label>
        <input
          ref={e => {
            pw(e)
            pwRef.current = e
          }}
          {...pwRest}
          type='password'
          id='pw'
        />
        {errors && <span>{errors?.pw?.message}</span>}
        <button disabled={!(emailRegex.test(watch().id) && watch().pw.length >= 8)}>등록</button>
      </form>
    </>
  )
}

export default SignUpForm
