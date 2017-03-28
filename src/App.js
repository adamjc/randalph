import React, { Component } from 'react'
import './App.css'
import Randalph from './randalph.js'

const randalph = new Randalph()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { char: randalph.getChar() }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    let char = randalph.getChar()

    if (char === '') {
      char = <i className="fa fa-repeat" aria-hidden="true"></i>
      randalph.reset()
    }

    this.setState(_ => ({
      char: char
    }))
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h1 onClick={this.handleClick} className="randy">{this.state.char}</h1>
        </div>
      </div>
    );
  }
}

export default App;
