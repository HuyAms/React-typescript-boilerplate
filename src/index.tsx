import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./index.scss";
declare const module: any;

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const render = () => {
  ReactDOM.render(app, document.getElementById("root"));
};

render();

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}
