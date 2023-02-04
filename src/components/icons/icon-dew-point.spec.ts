import { describe } from 'vitest'

import { testIconComponent } from '@/tests/test-icon-component'

import IconDewPoint from './icon-dew-point.vue'

describe('icon-dew-point', () => {
  testIconComponent(IconDewPoint, 'Dew point')
})
