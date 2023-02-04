import type { Location } from '@/types/weather'
import { ref } from 'vue'
import useLocalStorage from './local-storage'

// const locations = ref<Location[]>([
//   { name: 'London', country: 'UK', latitude: 51.5074, longitude: 0.1278 },
//   { name: 'New York', country: 'US', latitude: 40.7128, longitude: -74.006 },
//   { name: 'Tokyo', country: 'JP', latitude: 35.6895, longitude: 139.6917 },
// ])

export const useLocations = () => {
  const { value: locations } = useLocalStorage('locations', [
    { name: 'London', country: 'UK', latitude: 51.5074, longitude: 0.1278 },
    { name: 'New York', country: 'US', latitude: 40.7128, longitude: -74.006 },
    { name: 'Tokyo', country: 'JP', latitude: 35.6895, longitude: 139.6917 },
  ] as Location[])

  const addLocation = (location: Location) => {
    locations.value.push(location)
  }
  const removeLocation = (index: number) => {
    locations.value.splice(index, 1)
  }

  return { locations, addLocation, removeLocation }
}
