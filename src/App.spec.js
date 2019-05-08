import React from 'react'
import { cleanup, render } from 'react-testing-library'

import App from './App'

afterEach(cleanup)

describe('App', () => {
  it('should render successfully', () => {
    const { getByText } = render(<App />)
    getByText('Learn React')
  })
})
