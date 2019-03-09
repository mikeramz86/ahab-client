import React, { Component } from "react"
import PropTypes from "prop-types"
import "./Greeting.css"

class Greeting extends Component {
  render() {
    return <h3>Hello, {this.props.name}</h3>
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

Greeting.defaultProps = {
  name: ""
};

export default Greeting;