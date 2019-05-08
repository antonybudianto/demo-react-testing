import { sum } from './math'

describe('math - sum', () => {
  it('can sum 2 number', () => {
    const res = sum(10, 20)
    expect(res).toBe(30)
  })

  it('can handle no arg', () => {
    const res = sum()
    expect(res).toBe(0)
  })

  it('can sum 1 number', () => {
    const res = sum(5)
    expect(res).toBe(5)
  })

  it('can handle minus', () => {
    const res = sum(-1, 2, 3)
    expect(res).toBe(4)
  })
})
