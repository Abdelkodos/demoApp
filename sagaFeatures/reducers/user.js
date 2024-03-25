export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED"
export const LOGOUT_SUCCEEDED = "LOGOUT_SUCCEEDED"

export const userReducer = ( state = null, action ) => {
  switch(action.type) {
    case LOGIN_SUCCEEDED:
      return action.payload
    case LOGOUT_SUCCEEDED:
      return null
    default:
      return state
  }
}