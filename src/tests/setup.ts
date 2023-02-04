import { fetch } from 'cross-fetch'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'

import { localStorageMock } from './mocks/local-storage'
import { navigatorMock } from './mocks/navigator'
import { server } from './mocks/server'
import { mockVuedraggable } from './mocks/vuedraggable'

global.fetch = fetch
global.localStorage = localStorageMock
global.navigator = navigatorMock

beforeAll(() => {
  mockVuedraggable()
  server.listen({ onUnhandledRequest: 'error' })
})
afterAll(() => {
  vi.clearAllMocks()
  server.close()
})
afterEach(() => {
  server.resetHandlers()
})
