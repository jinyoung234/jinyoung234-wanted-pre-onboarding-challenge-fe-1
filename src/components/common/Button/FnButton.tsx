import React from 'react'
import {useSetRecoilState} from 'recoil'
import {deleteTodo, getTodosDetail} from '../../../api/main'
import {disabledAtom} from '../../../atoms/main'
import {FnButtonProps} from './type'

function FnButton({index, setExtraData, setSave, id, btnType, context}: FnButtonProps) {
  const setDisabled = useSetRecoilState(disabledAtom)
  const handleButton = async () => {
    switch (btnType) {
      case 'modify':
        setDisabled(prev => {
          const copy = [...prev]
          copy[index] = false
          return copy
        })
        break
      case 'cancel':
        setDisabled(prev => {
          const copy = [...prev]
          copy[index] = true
          return copy
        })
        break
      case 'save':
        if (setSave) {
          setSave(true)
        }
        break
      case 'viewDetail':
        if (setExtraData) {
          const accessToken = window.localStorage.getItem('token')
          const response = await getTodosDetail(accessToken as string, id as string)
          if (response && setSave) {
            setSave(prev => !prev)
            setExtraData({...response.data})
          }
        }
        break
      case 'delete':
        if (id !== undefined) {
          const accessToken = window.localStorage.getItem('token')
          const response = await deleteTodo(accessToken as string, id)
          if (response.data === null) window.location.href = '/'
        }
        break
      default:
        return
    }
  }
  return <button onClick={handleButton}>{context}</button>
}

export default FnButton
