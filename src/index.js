import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import './index.css';
// import './style.css'
import {Provider} from 'react-redux'
import store from './store'
import App from './App';
// import Component from './tutorials/Component'
// import Form from './tutorials/Form'
// import EventClass from './tutorials/EventClass'
// import App from './tutorials/App'
// import App from './website/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

