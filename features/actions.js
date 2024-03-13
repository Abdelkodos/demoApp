import * as types from "./types"

export const getDataRequest = ( data ) => ({ type: types.DATA_FETCH_SUCCEEDED, payload: data })

export const loseDataRequest = () => ({ type: types.DATA_FETCH_REQUESTED, payload: undefined })