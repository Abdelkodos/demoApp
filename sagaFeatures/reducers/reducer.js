import * as types from "../types"

export const dataReducer = ( state = null, action ) => {
  switch (action.type) {
    case types.DATA_FETCH_SUCCEEDED:
      return action.payload
    case types.DATA_LOSE_SUCCEEDED:
      return null
    default:
      return state
  }
}