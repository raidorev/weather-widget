import { describe } from 'vitest'

import { testIconComponent } from '@/tests/test-icon-component'

import IconHumidity from './icon-humidity.vue'

describe('icon-humidity', () => {
  testIconComponent(IconHumidity, 'Humidity')
})
