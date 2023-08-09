import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
const initialState = {
  loading: false,
  data: null,
  error: null,
};

//액션 타입 정의
const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

//액션 생성자 함수
const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

//비동기 액션 생성자 함수
const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    axios("https://api.example.com/data")
      .then((data) => {
        dispatch(fetchDataSuccess());
      })
      .catch((error) => {
        dispatch(fetchDataFailure());
      });
  };
};

//리듀서 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer, applyMiddleware(thunk));

// 비동기 액션 디스패치
store.dispatch(fetchData());
