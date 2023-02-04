import { describe } from 'vitest'
import { testIconComponent } from '@/tests/test-icon-component'
import IconClose from './icon-close.vue'

describe('icon-close', () => {
  testIconComponent(IconClose, 'Close')
})
