import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { debounce } from './debounce'

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should debounce a function', () => {
    const fn = vi.fn()
    const debounced = debounce(fn, 100)

    debounced()
    debounced()
    debounced()

    expect(fn).toHaveBeenCalledTimes(0)

    vi.advanceTimersByTime(50)

    expect(fn).toHaveBeenCalledTimes(0)

    vi.advanceTimersByTime(60)

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should call the debounced function only once', () => {
    const fn = vi.fn()
    const debounced = debounce(fn, 100)

    debounced()
    debounced()
    debounced()

    vi.advanceTimersByTime(100)

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should cancel the debounced function when cancel method is called', () => {
    const fn = vi.fn()
    const debounced = debounce(fn, 100)

    debounced()

    debounced.cancel()

    vi.advanceTimersByTime(100)

    expect(fn).toHaveBeenCalledTimes(0)
  })
})
