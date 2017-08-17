import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './Reducers/todoReducer';

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
          <TodosInput addTodo={ this.props.addTodo } />
          <TodosList />
      </div>
    );
  }
}

export default connect(
  (state) => state, 
  { addTodo }
)(App);
