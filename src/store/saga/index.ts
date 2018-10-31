import {takeEvery, all} from "redux-saga/effects";
import {userActionType} from "../actions/actionTypes";
import * as userSaga from "./users";

export function* rootSaga() {
  yield all([
    takeEvery(userActionType.FETCH_USER_START, userSaga.fetchUsersSaga),
  ]);
}
