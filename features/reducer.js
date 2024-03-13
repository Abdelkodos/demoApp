import * as types from "./types"

export const reducer = ( state, action ) => {
  switch (action.type) {
    case types.DATA_FETCH_SUCCEEDED:
      return action.payload
    case types.DATA_LOSE_SUCCEEDED:
      return action.payload
    default:
      return state
  }
}