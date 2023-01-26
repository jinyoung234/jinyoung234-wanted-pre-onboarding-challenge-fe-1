import React from 'react'
import {clearStoredToken} from '../../../utils/localStorage'
import {NavWrapper} from './style'

function NavBar() {
  const handleLogout = () => {
    clearStoredToken()
    window.location.href = '/auth/login'
  }
  return (
    <nav>
      <NavWrapper>
        <li>ToDoList</li>
        <li onClick={handleLogout}>로그아웃</li>
      </NavWrapper>
    </nav>
  )
}

export default NavBar
