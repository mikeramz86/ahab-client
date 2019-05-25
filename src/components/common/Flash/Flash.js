import React from 'react'

import './Flash.css'

const selectType = type =>
  type === 'info'
    ? 'flash flash--info'
    : 'flash flash--error'

const Flash = ({ message, type }) =>
  <div className={selectType(type)}>
    <div className="flash__text">
      {message}
    </div>
  </div>

export default Flash
