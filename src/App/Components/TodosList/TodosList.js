import React, { Component } from 'react';
import './TodosList.css';

import Todo from '../Todo/Todo';

class TodosList extends Component {
  render() {
    return(
      <ul>
        <Todo />
        <Todo />
      </ul>
    )
  }
}

export default TodosList;