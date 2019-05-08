const mockReactDOM = {
  render: jest.fn()
}
jest.mock('react-dom', () => {
  return mockReactDOM
})
jest.mock('./App')

test('index should run well', () => {
  require('./index')
  expect(mockReactDOM.render).toHaveBeenCalled()
})
