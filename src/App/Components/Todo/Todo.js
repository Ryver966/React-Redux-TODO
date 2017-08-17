import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return(
      <li>
        <input 
          type='checkbox' 
          className='todo-checkbox'
        />
        <p>Test Todo</p>
      </li>
    )
  }
}

export default Todo;