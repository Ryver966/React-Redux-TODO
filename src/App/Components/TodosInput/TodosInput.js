import React, { Component } from 'react';
import './TodosInput.css';
import { connect } from 'react-redux';

class TodosInput extends Component {

  constructor(props) {
    super(props);

    this.saveNewTodo = this.saveNewTodo.bind(this);

    this.state = {
      newTodoInput: null
    }
  }

  saveNewTodo() {
    return this.props.addTodo(this.state.newTodoInput)
  }

  render() {
    return(
      <form onSubmit={ () => this.saveNewTodo() } >
        <input 
          className='todos-input' 
          onChange={ (e) => this.setState({ newTodoInput: e.target.value }) }
        />
      </form>
    )
  }
}

export default connect(
  (state) => ({  })
)(TodosInput);