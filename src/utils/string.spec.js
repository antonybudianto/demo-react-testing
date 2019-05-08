import { str2num } from './string'

describe('str2num', () => {
  it('should convert successfully', () => {
    const res = str2num('123')
    expect(res).toBe(123)
  })

  it('should handle non number', () => {
    const res = str2num('a')
    expect(res).toBe(0)
  })
})
