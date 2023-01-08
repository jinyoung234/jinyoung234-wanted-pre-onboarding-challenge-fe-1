import {ReactNode} from 'react'

interface MainPageContainerProps {
  children: ReactNode
}

interface IToDoData {
  title: string
  content: string
  id: string
  createAt: string
  updateAt: string
}

export type {MainPageContainerProps, IToDoData}
