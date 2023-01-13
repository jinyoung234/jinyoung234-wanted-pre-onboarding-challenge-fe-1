import {ReactNode} from 'react'

interface MainPageWrapperProps {
  children: ReactNode
}

interface ToDoListWrapperProps {
  children: ReactNode
}

interface IToDoData {
  title: string
  content: string
  id: string
  createAt: string
  updateAt: string
}

export type {MainPageWrapperProps, ToDoListWrapperProps, IToDoData}
