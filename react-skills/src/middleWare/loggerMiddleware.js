const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type);
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action);
  console.log("다음 상태", store.getState());
  console.log(groupEnd);
};

//thunk
import { createAction, handleActions } from "redux-actions";
const INCREASE = "counter/increase";
const DECREASE = "counter/decrease";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//increase를 1초 뒤에 실행하는 함수
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
//decrease를 1초 뒤에 실행하는 함수
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0;

//액션을 정의해주는 handleActions
const counter = handleActions({
  [INCREASE]: (state) => state + 1,
  [DECREASE]: (state) => state - 1,
});

export default counter;
