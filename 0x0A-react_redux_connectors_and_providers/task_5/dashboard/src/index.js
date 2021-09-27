import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import { uiReducer } from './reducers/uiReducer';
import { rootReducer } from './reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = configureStore(
  { reducer: rootReducer}, 
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

export {store};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
