import { vi } from 'vitest'
import { defineComponent } from 'vue'

export const mockVuedraggable = () => {
  vi.mock('vuedraggable', () => {
    return {
      default: defineComponent({
        template: '<div><slot /></div>',
      }),
    }
  })
}
