import React from 'react'
import { cleanup, render } from 'react-testing-library'

import Hello from './Hello'

afterEach(cleanup)

describe('Hello', () => {
  it('should render with prop name successfully', () => {
    const { getByText } = render(<Hello name="Antony" />)
    getByText('Hello, Antony')
  })
})
