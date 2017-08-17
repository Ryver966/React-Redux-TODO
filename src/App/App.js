import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';

import TodosInput from './Components/TodosInput/TodosInput';
import TodosList from './Components/TodosList/TodosList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Redux Todo</h2>
        </div>
          <TodosInput />
          <TodosList />
      </div>
    );
  }
}

export default App;
