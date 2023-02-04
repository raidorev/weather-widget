import { describe } from 'vitest'

import { testIconComponent } from '@/tests/test-icon-component'

import IconSearch from './icon-search.vue'

describe('icon-search', () => {
  testIconComponent(IconSearch, 'Search')
})
