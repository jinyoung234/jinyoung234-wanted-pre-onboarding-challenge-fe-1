import React from 'react'
import {Form} from '../../../wrappers/common/FormWrapper'
import {SignUpProps} from '../../../types'
import {emailRegex} from '../../../utils/regex'

function SignUpForm({
  form: {handleSubmit, onSignUpValid},
  input: {register},
  errorText: {errors, idErrorMessage, pwErrorMessage},
}: SignUpProps) {
  return (
    <>
      <Form handleSubmit={handleSubmit(onSignUpValid)}>
        <Form.Label label='ID' htmlFor='id' />
        <Form.Input
          type='text'
          id='id'
          {...register('email', {
            required: '이메일 입력은 필수입니다.',
            pattern: {
              value: emailRegex,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
        />
        {errors && <Form.ErrorText message={idErrorMessage} />}
        <Form.Label label='PW' htmlFor='pw' />
        <Form.Input
          type='password'
          id='pw'
          {...register('password', {
            required: '비밀번호 입력은 필수입니다.',
            minLength: {
              value: 8,
              message: '8자리 이상 비밀번호를 사용하세요.',
            },
          })}
        />
        {errors && <Form.ErrorText message={pwErrorMessage} />}
        <Form.Button context='회원가입' />
      </Form>
    </>
  )
}

export default SignUpForm
