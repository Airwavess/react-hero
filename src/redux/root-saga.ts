import { all } from "redux-saga/effects";
import heroesSaga from "./heroes/sagas";

function* rootSaga() {
  yield all([heroesSaga()]);
}

export default rootSaga;
