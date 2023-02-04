import type { InjectionKey, Ref } from 'vue'
import type { Location } from './types/weather'

export const locationsKey = Symbol('locations') as InjectionKey<Ref<Location[]>>
