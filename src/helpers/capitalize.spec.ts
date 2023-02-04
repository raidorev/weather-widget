import { describe, expect, it } from 'vitest'

import { capitalize } from './capitalize'

describe.concurrent('capitalize', () => {
  describe('when value is empty', () => {
    it('should return empty string', () => {
      expect(capitalize('')).toBe('')
    })
  })

  describe('when value is not empty', () => {
    it('should return capitalized string', () => {
      expect(capitalize('hello')).toBe('Hello')
    })
  })
})
