import React, { Component } from 'react';
import './TodosInput.css';
import { connect } from 'react-redux';

class TodosInput extends Component {

  constructor(props) {
    super(props);

    this.saveNewTodo = this.saveNewTodo.bind(this);

    this.state = {
      newTodoInput: ''
    }
  }

  saveNewTodo(e) {
    this.props.addTodo(this.state.newTodoInput)
    this.setState({ newTodoInput: '' })
    e.preventDefault();
  }

  render() {
    return(
      <form onSubmit={ (e) => this.saveNewTodo(e) } >
        <input 
          className='todos-input' 
          onChange={ (e) => this.setState({ newTodoInput: e.target.value }) }
          value={ this.state.newTodoInput }
        />
      </form>
    )
  }
}

export default connect(
  (state) => ({  })
)(TodosInput);