import { describe } from 'vitest'
import { testIconComponent } from '@/tests/test-icon-component'
import IconPressure from './icon-pressure.vue'

describe('icon-pressure', () => {
  testIconComponent(IconPressure, 'Pressure')
})
