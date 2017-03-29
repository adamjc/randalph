import React, { Component } from 'react'
import './App.css'
import Randalph from './randalph.js'

const randalph = new Randalph()

class App extends Component {
  componentDidMount () {
    window.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', this.handleAnim);
  }

  constructor (props) {
    super(props)
    this.state = {
      char: randalph.getChar(),
      class: "randy animated"
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleAnim = this.handleAnim.bind(this);
  }

  handleAnim () {
    this.setState(_ => ({
      class: "randy animated"
    }))
  }

  handleClick () {
    let char = randalph.getChar()

    if (char === '') {
      char = <i className="fa fa-repeat" aria-hidden="true"></i>
      randalph.reset()
    }

    this.setState(_ => ({
      class: "randy animated pulse",
      char: char
    }))
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h1 onClick={this.handleClick} onAnimationEnd={this.handleAnim} className={this.state.class}>{this.state.char}</h1>
        </div>
      </div>
    );
  }
}

export default App;
