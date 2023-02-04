import type { InjectionKey, Ref } from 'vue'
import type { Location } from './types/weather'

export type LocationsInjection = {
  locations: Ref<Location[]>
  addLocation: (location: Location) => void
  removeLocation: (index: number) => void
}
export const locationsKey = Symbol(
  'locations',
) as InjectionKey<LocationsInjection>
