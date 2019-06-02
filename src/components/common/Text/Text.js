import React from 'react'

import './Text.css'

const Text = ({ type, text }) => {
    if (type === 'text') {
        return <input
            className="input input--type"
            type={type}
            value={text}
        />
    }

    return <input>{text}</input>
}

export default Text
