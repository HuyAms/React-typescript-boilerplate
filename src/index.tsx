import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
declare const module: any;

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

render();

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}
