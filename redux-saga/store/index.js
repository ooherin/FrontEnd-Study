import { applyMiddleware } from "redux";
import reduxSaga from "redux-saga";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../modules";
import { createStore } from "redux";
import { rootSaga } from "../modules";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
