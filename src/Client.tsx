import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './pages/SignUp'

function Client() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={'/auth/login'} element={<SignUp />} />
        <Route path={'/auth'} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Client
