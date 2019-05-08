import React, { PureComponent } from 'react'

class Hello extends PureComponent {
  render() {
    const { name } = this.props
    return <div>Hello, {name}</div>
  }
}

export default Hello
