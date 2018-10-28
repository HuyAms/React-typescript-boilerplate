import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './main.css';
import App from './App';
declare const module: any;

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
