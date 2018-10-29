import {put, call} from "redux-saga/effects";
import * as userAction from "../actions/user";
import axios from "../../utils/axious";

export function* fetchUsersSaga() {
  try {
    const response = yield call(axios.get, "/users");

    yield put(userAction.fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(userAction.fetchUsersFail(error.message));
  }
}
