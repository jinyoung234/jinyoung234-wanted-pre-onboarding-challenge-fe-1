import React from 'react'
import {useNavigate} from 'react-router-dom'
import {getStoredToken} from '../utils/localStorage'

function useUser() {
  const navigate = useNavigate()
  const accessToken = getStoredToken()
  React.useEffect(() => {
    if (!accessToken) {
      alert('다시 로그인해주세요.')
      navigate('/auth/login')
    }
  }, [navigate, accessToken])
}

export default useUser
