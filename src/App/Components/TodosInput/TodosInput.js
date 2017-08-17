import React, { Component } from 'react';
import './TodosInput.css';

class TodosInput extends Component {
  render() {
    return(
      <form>
        <input className='todos-input' />
      </form>
    )
  }
}

export default TodosInput;