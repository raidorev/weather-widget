import { describe } from 'vitest'
import { testIconComponent } from '@/tests/test-icon-component'
import IconVisibility from './icon-visibility.vue'

describe('icon-visibility', () => {
  testIconComponent(IconVisibility, 'Visibility')
})
