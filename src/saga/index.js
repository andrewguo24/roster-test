import { fork, all } from "redux-saga/effects";
import watchRequestData from "./data";

export default function* rootSaga() {
  yield all([fork(watchRequestData)]);
}
