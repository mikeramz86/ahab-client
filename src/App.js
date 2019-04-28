import React, { Component } from 'react'
import './App.css'
import LoginPage from "./LoginPage"
import Greeting from "./Greeting"

const name = 'michael and evilSoft'
const error = {
  message: 'log in error',
  type: 'loginError'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage error={error}/>
        <Greeting name={name} />
      </div>
    )
  }
}

export default App
