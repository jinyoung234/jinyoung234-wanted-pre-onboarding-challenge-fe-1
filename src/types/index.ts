import {FieldErrorsImpl, UseFormHandleSubmit, UseFormRegister} from 'react-hook-form'

interface SignUpProps {
  form: {handleSubmit: UseFormHandleSubmit<IFormData>; onSignUpValid: (data: IFormData) => void}
  input: {register: UseFormRegister<IFormData>}
  errorText: {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: string
      }>
    >
    idErrorMessage: string | undefined
    pwErrorMessage: string | undefined
  }
}

interface IFormData {
  [key: string]: string
}

interface IUser {
  email: string
  password: string
}

export type {SignUpProps, IFormData, IUser}
