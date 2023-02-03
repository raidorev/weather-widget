/**
 * Calculate cardinal direction from wind angle
 *
 * @param degree Wind angle in degree
 * @returns Cardinal direction
 */
export function determineCardinalDirection(degree: number): string {
  const directions = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ]

  const pointCount = directions.length
  const step = 360 / pointCount
  const offset = step / 2

  const angle = Math.floor((degree + offset) / step)
  return directions[angle % pointCount]
}

/**
 * Calculate dew point using simplified Magnus formula
 *
 * https://en.wikipedia.org/wiki/Dew_point#Calculating_the_dew_point
 *
 * @param temperature Temperature in Celsius degree
 * @param humidity Humidity in percent
 * @returns Dew point in Celsius degree
 */
export function calculateDewPoint(
  temperature: number,
  humidity: number,
): number {
  const a = 17.271
  const b = 237.7
  const gamma = (a * temperature) / (b + temperature) + Math.log(humidity / 100)
  return (b * gamma) / (a - gamma)
}
