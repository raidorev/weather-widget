import { ref } from 'vue'

import { apiKey } from '@/config'
import {
  calculateDewPoint,
  determineCardinalDirection,
} from '@/helpers/weather'
import type { Weather } from '@/types/weather'

/**
 * Provide weather data from OpenWeatherMap API. The data will be normalized.
 */
export const useWeather = ({
  latitude,
  longitude,
  immediate = true,
}: {
  latitude: number
  longitude: number
  immediate?: boolean
}) => {
  const isLoading = ref(false)
  const error = ref('')

  const weather = ref<Weather | undefined>()

  const fetchWeather = async () => {
    isLoading.value = true

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
      )
      const data = await response.json()
      weather.value = normalizeData(data)
    } catch {
      // TODO: Make error more specific
      error.value = 'Failed to fetch weather data'
    } finally {
      isLoading.value = false
    }
  }

  if (immediate) {
    fetchWeather()
  }

  return { isLoading, error, weather, fetchWeather }
}

function normalizeData(data: any): Weather {
  return {
    temperature: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    dewPoint: Math.round(calculateDewPoint(data.main.temp, data.main.humidity)),
    pressure: data.main.pressure,
    windSpeed: Math.round(data.wind.speed * 10) / 10,
    windDirection: data.wind.deg,
    windDirectionCardinal: determineCardinalDirection(data.wind.deg),
    visibility: data.visibility,
    description: data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
  }
}
