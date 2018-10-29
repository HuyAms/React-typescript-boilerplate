import * as React from "react";
import AppLayout from "./layouts/AppLayout";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import {hot} from "react-hot-loader";
import {Route, Switch} from "react-router-dom";

const App = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </AppLayout>
  );
};

export default hot(module)(App);
