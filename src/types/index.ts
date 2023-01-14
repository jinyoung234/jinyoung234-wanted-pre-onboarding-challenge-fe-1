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

interface ResponseToDoData {
  title: string
  content: string
  id: string
  createdAt: string
  updatedAt: string
}

interface ResponseCreateToDo {
  data: ResponseToDoData
}

interface ResponseGetToDos {
  data: {
    data: ResponseToDoData[]
  }
}

interface ResponseGetDetailToDos {
  data: {
    data: ResponseToDoData
  }
}

interface ToDoListProps {
  todos: ResponseToDoData[] | undefined
  isLoading: boolean
  isError: boolean
  createToDo: {
    createToDoProps: CreateToDoProps
  }
  handleViewTodo: (todoId: string) => void
}

interface ToDoBoardProps {
  todoDetail: {
    todoDetail: Pick<ResponseToDoData, 'content' | 'createdAt' | 'title' | 'id'>
    isError: boolean
    isLoading: boolean
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
  ResponseToDoData,
  ResponseGetDetailToDos,
  ResponseGetToDos,
  ToDoListProps,
  ToDoBoardProps,
}
