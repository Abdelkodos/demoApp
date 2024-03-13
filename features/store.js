import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import { getData } from "./lib/api"
import { put, takeEvery } from "redux-saga/effects"
import { reducer } from "./reducer"
import { rootSaga } from "./saga"

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export const selectData = state => state

export const fetchData = () => ({ type: "DATA_FETCH_REQUESTED" })
export const loseData = () => ({ type: "DATA_LOSE_REQUESTED" })