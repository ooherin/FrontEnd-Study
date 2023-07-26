import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";

const rootReducer = combineReducers({
  counter,
});

export function* rootSaga() {
  //all 함수는 여러가지 saga를 합치는 역할을 한다.

  yield all([counterSaga()]);
}

export default rootReducer;
