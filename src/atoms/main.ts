import {atom} from 'recoil'
import {IToDoData} from '../wrappers/main/type'

const todosAtom = atom<IToDoData[]>({
  key: 'todosAtom',
  default: [],
})

export {todosAtom}
