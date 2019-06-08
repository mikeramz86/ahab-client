import React, { Component } from 'react'
import './App.css'
import LoginPage from "../../components/Login"

const error = {
  message: 'log in error',
  type: 'loginError'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage error={error}/>
      </div>
    )
  }
}

export default App
