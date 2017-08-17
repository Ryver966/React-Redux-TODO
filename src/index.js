import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import store from './App/Reducers/store';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { addTodo } from './App/Reducers/todoReducer';

const actions = bindActionCreators({
  addTodo
}, store.dispatch)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
