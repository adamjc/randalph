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

  handleInterval () {
    // const circle = document.getElementById('circle')
    // const radius = circle.r.baseVal.value
    // const circumference = 2 * Math.PI * radius
    // const timeLimit = 60 // in seconds
    // const increment = circumference / timeLimit
    //
    // let currentLength = 0
    // let lastTime = new Date().getTime()
    //
    // const intervalId = setInterval(_ => {
    //   const dT = ((new Date().getTime()) - lastTime) / 1000
    //   circle.style['stroke-dasharray'] = `${currentLength} ${circumference}`
    //   currentLength += increment * dT
    //
    //   if (currentLength >= circumference) {
    //     clearInterval(intervalId)
    //   }
    //
    //   lastTime = new Date().getTime()
    // }, 1000 / 60);
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
        <div className="container">
          <svg width="250" height="250">
            <circle id="circle" transform="rotate(-90, 125, 125)" className="circle" cx="125" cy="125" r="90"/>
          </svg>
          <h1 onClick={this.handleClick} onAnimationEnd={this.handleAnim} className={this.state.class}>{this.state.char}</h1>
        </div>
      </div>
    );
  }
}

export default App;
