jest.mock('./App.js')
jest.mock('react-dom', () => {
  return {
    render: jest.fn()
  }
})

const ReactDOM = require('react-dom')

test('index should run well', () => {
  require('./index')
  expect(ReactDOM.render).toHaveBeenCalled()
})
