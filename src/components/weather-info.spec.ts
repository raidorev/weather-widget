import { capitalize } from '@/helpers/capitalize'
import type { Location, Weather } from '@/types/weather'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LocationWeather from './weather-info.vue'

describe('location-weather', () => {
  const location = {
    name: 'London',
    country: 'UK',
    latitude: 51.5074,
    longitude: 0.1278,
  } as Location
  const weather = {
    temperature: 20.5,
    feelsLike: 18.3,
    humidity: 67.4,
    dewPoint: 4.5,
    pressure: 966,
    windSpeed: 4,
    windDirectionCardinal: 'N',
    visibility: 10000,
    description: 'overcast clouds',
    icon: '',
  } as Weather

  it('should have city and county as a title', () => {
    const wrapper = mount(LocationWeather, {
      props: { location, weather },
    })

    expect(wrapper.find('h4').text()).toBe('London, UK')
  })

  it('should have all needed info', () => {
    const wrapper = mount(LocationWeather, {
      props: { location, weather },
    })

    const text = wrapper.text()
    const infos = [
      `${weather.temperature}°C`,
      `Feels like ${weather.feelsLike}°C`,
      capitalize(weather.description),
      `${weather.windSpeed}m/s ${weather.windDirectionCardinal}`,
      `${weather.pressure}hPa`,
      `Humidity: ${weather.humidity}%`,
      `Dew point: ${weather.dewPoint}°C`,
      `Visibility: 10.0km`,
    ]

    for (const info of infos) {
      expect(text).toContain(info)
    }
  })
})
