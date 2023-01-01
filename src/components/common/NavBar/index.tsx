import React from 'react'
import {NavWrapper} from './style'

function NavBar() {
  const handleLogout = () => {
    window.localStorage.removeItem('token')
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
