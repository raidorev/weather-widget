import { watch } from 'vue'

import { apiKey, locationsStorageKey } from '@/config'
import type { Location } from '@/types/weather'

import { useGeolocation } from './geolocation'
import useLocalStorage from './local-storage'

export const useLocations = () => {
  const usingForTheFirstTime = !localStorage.getItem(locationsStorageKey)

  const { value: locations } = useLocalStorage(
    locationsStorageKey,
    [] as Location[],
  )

  const addLocation = (location: Location) => {
    locations.value.push(location)
  }
  const removeLocation = (index: number) => {
    locations.value.splice(index, 1)
  }

  const tryToAddCurrentLocation = () => {
    // If this is the first time the user is using the app,
    // we will try to add their current location
    if (!usingForTheFirstTime) {
      return
    }

    const { geolocation } = useGeolocation()

    const stopWatcher = watch(geolocation, async () => {
      if (!geolocation.value) {
        return
      }

      stopWatcher()

      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/reverse?lat=${geolocation.value.latitude}&lon=${geolocation.value.longitude}&limit=5&appid=${apiKey}`,
        )
        const data = await response.json()
        addLocation({
          name: data[0].name,
          country: data[0].country,
          latitude: data[0].lat,
          longitude: data[0].lon,
        })
      } catch (error) {
        console.log(error)
      }
    })
  }

  return { locations, addLocation, removeLocation, tryToAddCurrentLocation }
}
