import { describe } from 'vitest'

import { testIconComponent } from '@/tests/test-icon-component'

import IconLoading from './icon-loading.vue'

describe('icon-loading', () => {
  testIconComponent(IconLoading, 'Loading')
})
