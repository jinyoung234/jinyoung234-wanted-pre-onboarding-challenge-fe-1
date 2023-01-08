import React from 'react'
import {MainPageContainerProps} from './type'

export const MainPage = Object.assign(MainPageContainer, {})

function MainPageContainer({children}: MainPageContainerProps) {
  React.useEffect(() => {
    const accessToken = window.localStorage.getItem('token')
    if (accessToken === null) {
      alert('다시 로그인 해 주세요.')
      window.location.href = '/auth/login'
    }
  }, [])
  return <div>{children}</div>
}

export default MainPageContainer
