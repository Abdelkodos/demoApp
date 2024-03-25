import { delay, all, put, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'
import { getData, getUser } from '../lib/api'

function* getDataAction() {
  try {
    yield delay(4000)
    const data = yield getData()
    yield put(actions.getDataRequest(data))
  } catch (e) {
    console.log('error', e)
  }
}

function* watchGetData() {
  yield takeEvery("DATA_FETCH_REQUESTED", getDataAction)
}

function* getUserAction() {
  try {
    yield delay(4000)
    const user = yield getUser()
    yield put(actions.getUserRequest(user))
  } catch (e) {
    console.log('error', e)
  }
}

function* watchGetUser() {
  yield takeEvery("LOGIN_SUCCEEDED", getUserAction)
}

function* loseDataAction() {
    yield delay(4000)
    yield put(actions.loseDataRequest())
}

function* watchLoseData() {
  yield takeEvery("DATA_LOSE_REQUESTED", loseDataAction)
}

function* loseUserAction() {
  yield delay(4000)
  yield put(actions.loseUserRequest())
}

function* watchLoseUser() {
  yield takeEvery("LOGOUT_SUCCEEDED", loseUserAction)
}

export function* rootSaga() {
  yield takeEvery("LOGIN_REQUESTED", getUserAction)
  yield takeEvery("LOGOUT_REQUESTED", loseUserAction)
  yield takeEvery("DATA_FETCH_REQUESTED", getDataAction)
  yield takeEvery("DATA_LOSE_REQUESTED", loseDataAction)
}