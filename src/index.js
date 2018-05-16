// Polyfills
import 'core-js/shim';
import 'classlist-polyfill';

import 'rxjs';
import React from 'react';
import { render } from 'react-dom'
import App from './containers/App/';
import { Provider } from 'react-redux';
import './styles/main.css'
import store from './store';

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )