import React from 'react'
import {useForm} from 'react-hook-form'
import {getSignUp} from '../../api/auth'
import useConnect from '../../hooks/useConnect'
import {emailRegex} from '../../utils/regex'
import ErrorText from '../common/ErrorText'
import Input from '../common/Input'
import Label from '../common/Label'
import {IFormData} from './type'

function SignUpForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormData>()
  const {ref: id, ...idRest} = register('id')
  const {ref: pw, ...pwRest} = register('pw')
  const {connectRef: connectIdRef} = useConnect(id)
  const {inputRef: pwRef, connectRef: connectPWRef} = useConnect(pw)
  const onValid = (data: IFormData) => {
    getSignUp({email: data.id, password: data.pw}).then(res => {
      if (res?.status === 200) window.location.href = 'auth/login'
    })
  }
  return (
    <>
      <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onValid)}>
        <Label label={'ID'} htmlFor='id' />
        <Input connectRef={connectIdRef} type='text' id='id' pwRef={pwRef} isEnter {...idRest} />
        {errors && <ErrorText message={errors?.id?.message} />}
        <Label label={'PW'} htmlFor='pw' />
        <Input connectRef={connectPWRef} type='password' id='pw' {...pwRest} />
        {errors && <ErrorText message={errors?.pw?.message} />}
        <button disabled={!(emailRegex.test(watch().id) && watch().pw.length >= 8)}>등록</button>
      </form>
    </>
  )
}

export default SignUpForm
