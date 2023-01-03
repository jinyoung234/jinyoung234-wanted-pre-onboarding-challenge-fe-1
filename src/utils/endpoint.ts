const API = process.env.REACT_APP_API
const END_POINT = {
  POST_SIGN_UP: `${API}/users/create`,
  POST_SIGN_IN: `${API}/users/login`,
  POST_CREATE_TODO: `${API}/todos`,
}

export {END_POINT}
