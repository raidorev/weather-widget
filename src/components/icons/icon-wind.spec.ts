import { describe } from 'vitest'

import { testIconComponent } from '@/tests/test-icon-component'

import IconWind from './icon-wind.vue'

describe('icon-wind', () => {
  testIconComponent(IconWind, 'Wind')
})
