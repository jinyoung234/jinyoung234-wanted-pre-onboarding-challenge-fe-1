const USER_LOCALSTORAGE_KEY = 'user-accessToken'

// helper to get user from localstorage
function getStoredToken() {
  const storedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY)
  return storedUser
}

function setStoredToken(token: string): void {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, token)
}

function clearStoredToken(): void {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY)
}

export {getStoredToken, setStoredToken, clearStoredToken}
