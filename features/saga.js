import { delay, all, put, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'
import { getData } from './lib/api'

function* getDataAction() {
  try {
    yield delay(4000)
    const data = yield getData()
    yield put (actions.getDataRequest(data))
  } catch (e) {
    console.log('error')
  }
}

function* loseDataAction() {
  try {
    yield delay(4000)
    const data = undefined
    yield put (actions.loseDataRequest(data))
  } catch (e) {
    console.log('error')
  }
}

export function* rootSaga() {
  yield takeEvery("DATA_FETCH_REQUESTED", getDataAction)
  yield takeEvery("DATA_LOSE_REQUESTED", loseDataAction)
}