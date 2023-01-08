import {atom, selector} from 'recoil'
import {getTodos} from '../api/main'
import {IToDoData} from '../containers/main/type'

const todosAtom = atom<IToDoData[]>({
  key: 'todosAtom',
  default: [],
})

const disabledAtom = atom<boolean[]>({
  key: 'disabledAtom',
  default: [],
})

const fetchTodosSelector = selector<IToDoData[]>({
  key: 'fetchTodosSelector',
  get: async () => {
    const accessToken = window.localStorage.getItem('token') as string
    const {data} = await getTodos(accessToken)
    return data
  },
})

export {todosAtom, fetchTodosSelector, disabledAtom}
