import { describe } from 'vitest'

import { testIconComponent } from '@/tests/test-icon-component'

import IconBurger from './icon-burger.vue'

describe('icon-burger', () => {
  testIconComponent(IconBurger, 'Menu')
})
