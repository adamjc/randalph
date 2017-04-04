import React, { Component } from 'react'
import './App.css'
import Randalph from './randalph.js'

const randalph = new Randalph()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      char: randalph.getChar(),
      class: "randy animated"
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleTextAnim = this.handleTextAnim.bind(this)
  }

  handleTextAnim () {
    this.setState(_ => ({
      class: "randy animated"
    }))
  }

  handleInterval () {
    clearInterval(this.state.intervalId)

    const circle = document.getElementById('circle')
    const radius = circle.r.baseVal.value
    const circumference = 2 * Math.PI * radius
    const timeLimit = 60 // in seconds
    const increment = circumference / timeLimit

    let currentLength = 0
    let lastTime = new Date().getTime()

    const intervalId = setInterval(_ => {
      const dT = ((new Date().getTime()) - lastTime) / 1000
      circle.style['stroke-dasharray'] = `${currentLength} ${circumference}`
      currentLength += increment * dT

      if (currentLength >= circumference) {
        clearInterval(intervalId)
      }

      lastTime = new Date().getTime()
    }, 1000 / 60);

    this.setState(_ => ({
      intervalId: intervalId
    }))
  }

  handleClick () {
    this.handleInterval()
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
        <div className="container">
          <svg width="225" height="225">
            <circle id="circle" transform="rotate(-90, 112.5, 112.5)" className="circle" cx="112.5" cy="112.5" r="110"/>
          </svg>
          <h1 onClick={this.handleClick} onAnimationEnd={this.handleTextAnim} className={this.state.class}>{this.state.char}</h1>
        </div>
      </div>
    );
  }
}

export default App;
