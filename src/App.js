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
    this.setState(_ => ({
      char: randalph.getChar()
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
