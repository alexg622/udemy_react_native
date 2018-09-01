import { EMAIL_CHANGED, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, PASSWORD_CHANGED } from '../actions/types'

const INITIAL_STATE = { loading: false, email: "", password: "", user: null, error: "" }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload}
    case LOGIN_USER:
      return {...state, loading: true, error: ""}
    case PASSWORD_CHANGED:
      return {...state, password: action.payload}
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.payload, error: "", loading: false}
    case LOGIN_USER_FAIL:
      return {...state, error: "Authentication Failed.", loading: false}
    default:
      return state
  }
}
