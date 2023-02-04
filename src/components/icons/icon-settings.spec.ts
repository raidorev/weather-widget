import { describe } from 'vitest'
import { testIconComponent } from '@/tests/test-icon-component'
import IconSettings from './icon-settings.vue'

describe('icon-settings', () => {
  testIconComponent(IconSettings, 'Settings')
})
