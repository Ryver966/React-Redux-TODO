import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Redux Todo</h2>
        </div>

      </div>
    );
  }
}

export default App;
