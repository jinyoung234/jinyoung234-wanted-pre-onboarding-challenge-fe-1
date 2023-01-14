import {ReactNode} from 'react'

interface MainWrapperProps {
  children: ReactNode
}

interface IToDoData {
  title: string
  content: string
  id: string
  createAt: string
  updateAt: string
}

export type {MainWrapperProps, IToDoData}
