import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import {I18nextProvider} from "react-i18next";
import "sanitize.css/sanitize.css";
import "./index.scss";
import {rootSaga} from "./store/saga";
import userReducer from "./store/reducer/user";
import i18n from "./i18n";

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
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </I18nextProvider>
);

ReactDOM.render(app, MOUNT_NODE);
