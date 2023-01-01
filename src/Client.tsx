import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function Client() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={'/auth/login'} element={<SignIn />} />
        <Route path={'/auth'} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Client
