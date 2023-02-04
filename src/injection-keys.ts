import type { Location } from './types/weather'
import type { InjectionKey, Ref } from 'vue'

export interface LocationsInjection {
  locations: Ref<Location[]>
  addLocation: (location: Location) => void
  removeLocation: (index: number) => void
}
export const locationsKey = Symbol(
  'locations',
) as InjectionKey<LocationsInjection>
