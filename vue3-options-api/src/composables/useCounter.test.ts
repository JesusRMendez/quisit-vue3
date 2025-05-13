import { describe, it, expect } from 'vitest'
import { useCounter } from '../../src/composables/useCounter'

describe('useCounter', () => {
  it('should start with provided value', () => {
    const { count } = useCounter(5)
    expect(count.value).toBe(5)
  })

  it('should increment the counter', () => {
    const { count, increment } = useCounter(1)
    increment()
    expect(count.value).toBe(2)
  })
})