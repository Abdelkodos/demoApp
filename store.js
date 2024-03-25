import { createStore, applyMiddleware, combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"
import { getData } from "./lib/api"
import { put, takeEvery } from "redux-saga/effects"
import { dataReducer } from "./sagaFeatures/reducers/reducer"
import { userReducer } from "./sagaFeatures/reducers/user"
import { rootSaga } from "./sagaFeatures/saga"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({ user: userReducer, data: dataReducer })

export const store = configureStore(
      { reducer: { rootReducer }, middleware: () => [sagaMiddleware], })
      // applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export const selectData = state => state.rootReducer.data
export const selectUser = state => state.rootReducer.user

export const fetchData = () => ({ type: "DATA_FETCH_REQUESTED" })
export const fetchUser = () => ({ type: "LOGIN_REQUESTED" })
export const loseData = () => ({ type: "DATA_LOSE_SUCCEEDED" })
export const loseUser = () => ({ type: "LOGOUT_SUCCEEDED" })
