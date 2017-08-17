import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return(
      <li>
        <input 
          type='checkbox' 
          className='todo-checkbox'
          //checked={ this.props.todo.completed ? true : false }
        />
        <p>{ this.props.todo.title }</p>
      </li>
    )
  }
}

export default Todo;