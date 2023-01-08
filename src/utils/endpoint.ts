const API = process.env.REACT_APP_API
const END_POINT = {
  POST_SIGN_UP: `${API}/users/create`,
  POST_SIGN_IN: `${API}/users/login`,
  PUT_UPDATE_TODO: `${API}/todos/`,
  POST_CREATE_TODO: `${API}/todos`,
  DELETE_DELETE_TODO: `${API}/todos/`,
  GET_TODOS: `${API}/todos`,
}

export {END_POINT}
