import { put, takeLatest } from "redux-saga/effects";
import { REQUEST_DATA } from "../constants";
import * as actions from "../actions";

function* fetchData() {
  try {
    const response = yield fetch("sample-data.json");
    if (!response.ok) throw new Error("Fetch data failed");
    const json = yield response.json();
    yield put(actions.receiveData(json));
  } catch (error) {
    yield put(actions.requestDataFailed());
  }
}

export default function* watchRequestData() {
  yield takeLatest(REQUEST_DATA, fetchData);
}
