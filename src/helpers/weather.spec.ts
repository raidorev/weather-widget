import { describe, expect, it } from 'vitest'

import { calculateDewPoint, determineCardinalDirection } from './weather'

describe.concurrent('weather', () => {
  describe('determineCardinalDirection', () => {
    it('should return 16 different directions in total', () => {
      const uniqueDirections = new Set()
      for (let degree = 0; degree < 360; degree++) {
        uniqueDirections.add(determineCardinalDirection(degree))
      }
      expect(uniqueDirections.size).toBe(16)
    })
  })

  describe('calculateDewPoint', () => {
    it('should return 0 when temperature is 0 and humidity is 100', () => {
      expect(calculateDewPoint(0, 100)).toBe(0)
    })

    it('should return approximately -12 when temperature is 5 and humidity is 28', () => {
      expect(Math.round(calculateDewPoint(5, 28))).toBe(-12)
    })
  })
})
