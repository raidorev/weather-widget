import { ref } from 'vue'

import type { LocationsInjection } from '@/injection-keys'
import type { Location } from '@/types/weather'

export const locationsInjectionMock = {
  locations: ref<Location[]>([]),
  addLocation(location: Location) {
    this.locations.value.push(location)
  },
  removeLocation(index: number) {
    this.locations.value.splice(index, 1)
  },
} as LocationsInjection
