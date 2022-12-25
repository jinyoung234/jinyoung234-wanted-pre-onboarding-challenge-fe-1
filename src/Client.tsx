import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './pages/Main'

function Client() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={'/'} element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Client
