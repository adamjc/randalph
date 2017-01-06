import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Randalph from './randalph.js'

const randalph = new Randalph()

class App extends Component {
  handleClick () {
    console.log(randalph.getChar())
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <button onClick={this.handleClick}>Click Me</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
