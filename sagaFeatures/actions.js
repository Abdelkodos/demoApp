import * as types from "./types"
import * as userTypes from "./reducers/user"

export const getDataRequest = ( data ) => ({ type: types.DATA_FETCH_SUCCEEDED, payload: data })

export const loseDataRequest = () => ({ type: types.DATA_LOSE_SUCCEEDED, payload: null })

export const getUserRequest = ( user ) => ({ type: "LOGIN_SUCCEEDED", payload: user })

export const loseUserRequest = ( ) => ({ type: userTypes.LOGIN_SUCCEEDED, payload: null })