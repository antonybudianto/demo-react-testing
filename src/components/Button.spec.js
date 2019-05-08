import React from 'react'
import { cleanup, render, fireEvent } from 'react-testing-library'

import Button from './Button'

afterEach(cleanup)

describe('Button', () => {
  it('should render successfully', () => {
    const { getByText } = render(<Button />)
    getByText('Status: ON')
  })

  it('should render successfully', () => {
    const { getByText } = render(<Button />)
    const btn = getByText('Status: ON')
    fireEvent.click(btn)
    getByText('Status: OFF')
  })
})
