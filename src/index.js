import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {compose, createStore} from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';

function reducer(state, action){
  return state
}

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const app = (
  <Provider store = {store}>
    <App />
  </Provider>
)


ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

