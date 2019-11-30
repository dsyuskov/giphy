import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './router';
import './scss/main.scss';

ReactDOM.render(Router, document.getElementById('root'));

serviceWorker.unregister();
if (module.hot) {
  module.hot.accept();
}
