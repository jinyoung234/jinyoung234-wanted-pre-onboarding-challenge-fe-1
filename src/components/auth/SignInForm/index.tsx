import React from 'react'
import {useForm} from 'react-hook-form'
import {getSignIn} from '../../../api/auth'
import useConnect from '../../../hooks/useConnect'
import {Form} from '../../../containers/common/FormContainer'
import {emailRegex} from '../../../utils/regex'
import {IFormData} from '../SignUpForm/type'

function SignInForm() {
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
    getSignIn({email: data.id, password: data.pw}).then(res => {
      if (res?.status === 200) {
        window.localStorage.setItem('token', res?.data.token)
        window.location.href = '/'
      }
    })
  }
  console.log(watch())
  return (
    <>
      <Form handleSubmit={handleSubmit(onValid)}>
        <Form.Label label={'ID'} htmlFor='id' />
        <Form.Input {...register('id')} type='text' id='id' pwRef={pwRef} isEnter />
        {errors && <Form.ErrorText message={errors?.id?.message} />}
        <Form.Label label={'PW'} htmlFor='pw' />
        <Form.Input {...register('pw')} type='password' id='pw' />
        {errors && <Form.ErrorText message={errors?.pw?.message} />}
        <Form.Button context='등록' disabledCondition={!(emailRegex.test(watch().id) && watch().pw.length >= 8)} />
      </Form>
    </>
  )
}

export default SignInForm
