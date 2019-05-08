import React, { PureComponent } from 'react'

class Button extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      on: true
    }
  }

  handleClick = () => {
    this.setState(state => ({
      on: !state.on
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Status: {this.state.on ? 'ON' : 'OFF'}
      </button>
    )
  }
}

export default Button
