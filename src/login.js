import React, { Component } from "react"
import "./login.css"

class LoginPage extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      error: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePassChange = this.handlePassChange.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
    this.dismissError = this.dismissError.bind(this)
  }

  dismissError() {
    this.setState({ error: "" })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    if (!this.state.username) {
      return this.setState({ error: "Username is required" })
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" })
    }

    return this.setState({ error: "" })
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value
    })
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    })
  }

  render() {
    return (
      <div className="login-form">
        <legend>Log In</legend>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            {this.state.error && (
              <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError}>✖</button>
                {this.state.error}
              </h3>
            )}
            <label>User Name</label>
            <input
              type="text"
              data-test="username"
              value={this.state.username}
              onChange={this.handleUserChange}
            />

            <label>Password</label>
            <input
              type="password"
              data-test="password"
              value={this.state.password}
              onChange={this.handlePassChange}
            />

            <input type="submit" value="Log In" data-test="submit" />
          </fieldset>
        </form>
      </div>
    )
  }
}

export default LoginPage
