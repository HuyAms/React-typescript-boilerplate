import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {I18nextProvider} from "react-i18next";
import "sanitize.css/sanitize.css";
import "./style/index.scss";
import {createBrowserHistory} from "history";
import {ConnectedRouter} from "connected-react-router/immutable";
import i18n from "./i18n";
import configureStore from "./configureStore";
import State from "./models/State";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const MOUNT_NODE = document.getElementById("root");

const history = createBrowserHistory();

const initialState = State();

const store = configureStore(initialState, history);

const app = (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ConnectedRouter>
    </Provider>
  </I18nextProvider>
);

ReactDOM.render(app, MOUNT_NODE);
