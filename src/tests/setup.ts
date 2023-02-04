import { fetch } from 'cross-fetch'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { localStorageMock } from './mocks/local-storage'
import { server } from './mocks/server'

global.fetch = fetch
global.localStorage = localStorageMock

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
})
afterAll(() => {
  server.close()
})
afterEach(() => {
  server.resetHandlers()
})
