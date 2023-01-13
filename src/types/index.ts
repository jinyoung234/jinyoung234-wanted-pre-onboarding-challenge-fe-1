import {FieldErrorsImpl, UseFormHandleSubmit, UseFormRegister} from 'react-hook-form'

interface IToDoForm {
  todo: string
}

interface CreateToDoProps {
  form: {handleSubmit: UseFormHandleSubmit<IToDoForm>; isValidToDo: (data: IToDoForm) => void}
  input: {register: UseFormRegister<IToDoForm>}
}

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

interface SignInProps {
  form: {handleSubmit: UseFormHandleSubmit<IFormData>; onSignInValid: (data: IFormData) => void}
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

interface RequestCreateToDo {
  title: string
  content: string
}
interface ResponseCreateToDo {
  data: {
    title: string
    content: string
    id: string
    createdAt: Date
    updatedAt: Date
  }
}

export type {
  SignUpProps,
  IFormData,
  IUser,
  SignInProps,
  IToDoForm,
  CreateToDoProps,
  RequestCreateToDo,
  ResponseCreateToDo,
}
