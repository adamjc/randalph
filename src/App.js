import React, { Component } from 'react'
import './App.css'
import Randalph from './randalph.js'

const randalph = new Randalph()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      radius: 110,
      char: <i className="fa fa-play" aria-hidden="true" style={{paddingLeft: "24px"}}></i>,
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

    const radius = this.state.radius
    const circumference = 2 * Math.PI * radius
    const timeLimit = 60 // in seconds
    const increment = circumference / timeLimit

    let currentLength = 0
    let lastTime = new Date().getTime()

    const intervalId = setInterval(_ => {
      const dT = ((new Date().getTime()) - lastTime) / 1000

      this.setState(_ => ({
        circumference: circumference,
        stroke: `${currentLength} ${circumference}`
      }))

      currentLength += increment * dT

      if (currentLength >= circumference) {
        clearInterval(intervalId)
        this.timeUp()
      }

      lastTime = new Date().getTime()
    }, 1000 / 60);

    this.setState(_ => ({
      intervalId: intervalId
    }))
  }

  timeUp () {
    navigator.vibrate(1000)
  }

  handleClick () {
    let char = randalph.getChar()

    if (char === '') {
      clearInterval(this.state.intervalId)
      this.setState(_ => ({
        stroke: `0 ${this.state.circumference}`
      }))
      char = <i className="fa fa-repeat" aria-hidden="true"></i>
      randalph.reset()
    } else {
      this.handleInterval()
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
            <circle id="circle" transform="rotate(-90, 112.5, 112.5)" className="circle" cx="112.5" cy="112.5" r={this.state.radius} style={{strokeDasharray: this.state.stroke}}/>
          </svg>
          <h1 onClick={this.handleClick} onAnimationEnd={this.handleTextAnim} className={this.state.class}>{this.state.char}</h1>
        </div>
      </div>
    );
  }
}

export default App;
