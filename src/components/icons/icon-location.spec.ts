import { describe } from 'vitest'
import { testIconComponent } from '@/tests/test-icon-component'
import IconLocation from './icon-location.vue'

describe('icon-location', () => {
  testIconComponent(IconLocation, 'Location')
})
