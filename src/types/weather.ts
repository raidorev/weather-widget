/**
 * Location information
 */
export interface Location {
  readonly name: string
  readonly country: string
  readonly latitude: number
  readonly longitude: number
}

/**
 * Weather information
 */
export interface Weather {
  /** Temperature in Celsius degree */
  readonly temperature: number
  /** Feels like in Celsius degree */
  readonly feelsLike: number
  /** Humidity in percent */
  readonly humidity: number
  /** Dew point in Celsius degree */
  readonly dewPoint: number
  /** Pressure in hPa */
  readonly pressure: number
  /** Wind speed in meter per second */
  readonly windSpeed: number
  /** Wind direction in degree */
  readonly windDirection: number
  /** Cardinal direction of wind */
  readonly windDirectionCardinal: string
  /** Visibility in meter*/
  readonly visibility: number
  /** Weather description */
  readonly description: string
  /** Weather icon URL */
  readonly icon: string
}
