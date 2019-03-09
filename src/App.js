import React, { Component } from 'react'
import './App.css'
import LoginPage from "./LoginPage"
import Greeting from "./Greeting"

const name = 'michael and evilSoft'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage/>
        <Greeting name={name} />
      </div>
    )
  }
}

export default App
