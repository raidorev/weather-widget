import { describe, it, expect } from 'vitest'
import { useWeather } from './weather'

describe.concurrent('weather', () => {
  it('should have empty weather, empty error by default', () => {
    const { error, isLoading, weather } = useWeather({
      latitude: 0,
      longitude: 0,
      immediate: false,
    })
    expect(error.value).toBe('')
    expect(weather.value).toBeUndefined()
    expect(isLoading.value).toBe(false)
  })

  it('should call API for weather data', async () => {
    const { fetchWeather, isLoading, weather } = useWeather({
      latitude: 0,
      longitude: 0,
      immediate: false,
    })
    await fetchWeather()
    expect(isLoading.value).toBe(false)
    expect(weather.value).not.toBeUndefined()
  })

  it('should have error when API call fails', async () => {
    const { fetchWeather, error, isLoading } = useWeather({
      latitude: Number.POSITIVE_INFINITY,
      longitude: 0,
      immediate: false,
    })
    await fetchWeather()
    expect(isLoading.value).toBe(false)
    expect(error.value).not.toBe('')
  })

  it('should immediately call API for weather data by default', async () => {
    const { isLoading } = useWeather({
      latitude: 0,
      longitude: 0,
    })
    expect(isLoading.value).toBe(true)
  })

  it('should transform API data to normalized data', async () => {
    const { weather, fetchWeather } = useWeather({
      latitude: 0,
      longitude: 0,
      immediate: false,
    })
    await fetchWeather()

    expect(weather.value).toMatchObject({
      tempeture: expect.any(Number),
      feelsLike: expect.any(Number),
      humidity: expect.any(Number),
      dewPoint: expect.any(Number),
      pressure: expect.any(Number),
      windSpeed: expect.any(Number),
      windDirection: expect.any(String),
      visibility: expect.any(Number),
      description: expect.any(String),
      icon: expect.any(String),
    })
  })
})
