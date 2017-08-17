import React, { Component } from 'react';
import './TodosList.css';
import { connect } from 'react-redux';

import Todo from '../Todo/Todo';

class TodosList extends Component {
  render() {

    const todos = this.props.todos.map((todo, index) =>
      <Todo 
        todo={ todo }
        key={ index }
      />
    )

    return(
      <ul>
        { todos }
      </ul>
    )
  }
}

export default connect(
  (state) => ({ todos: state.todos })

)(TodosList);