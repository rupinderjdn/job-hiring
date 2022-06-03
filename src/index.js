import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';

import jobs from './reducers/index.js'
import './util/bootstrap.css';
import { Provider } from 'react-redux';

const logger = ({dispatch, getState}) => (next) => (action) => {
  console.log("ACTION", action)
  next(action)
}

const store = createStore(jobs);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

