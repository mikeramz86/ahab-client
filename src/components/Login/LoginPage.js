import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './LoginPage.css'

import Button from '../common/Button'
import Flash from '../common/Flash'

const name = 'michael and evilSoft'

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
  }

  dismissError = () =>
    this.setState({ error: "" })

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
    const { error } = this.props
    const { message, type } = error

    return (
      <div className="LoginPage">
        {message && type === 'loginError' && <Flash message={message} />}

        {this.state.error && (
          <div className="flash">
            <Button onClick={this.dismissError} text="✖" />
            {this.state.error}
          </div>
        )}

        <div className="login-form">
          <legend>Log In</legend>

          <form onSubmit={this.handleSubmit}>
            <fieldset>
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
              <Button type="submit" text="Log In" />
            </fieldset>
          </form>
        </div>
        <Flash message={name} type="info" />
      </div>
    )
  }
}
LoginPage.propTypes = {
  error: PropTypes.object.isRequired
}

LoginPage.defaultProps = {
  error: {}
}

export default LoginPage
