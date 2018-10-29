import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import "./index.scss";
import "sanitize.css/sanitize.css";
import {rootSaga} from "./store/saga";
import userReducer from "./store/reducer/user";
declare const module: any;

const MOUNT_NODE = document.getElementById("root");

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const render = () => {
  ReactDOM.render(app, MOUNT_NODE);
};

render();

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}
