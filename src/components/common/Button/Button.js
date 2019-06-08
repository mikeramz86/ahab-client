import React from 'react'

import './button.css'

const Button = ({ type, onClick, text }) => {
  if (type === 'submit') {
    return <input
      className="button button--submit"
      type={type}
      value={text}
    />
  }

  return <button onClick={onClick}>{text}</button>
}

export default Button
