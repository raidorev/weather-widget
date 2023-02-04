import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import useLocalStorage from './local-storage'

describe.concurrent('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should retrieves and persists data in localStorage', async () => {
    const key = 'test-key'
    const initialValue: Record<string, any> = {
      foo: 'bar',
      baz: { qux: 'test' },
    }
    localStorage.removeItem(key)

    const wrapper = mount({
      setup() {
        return useLocalStorage(key, initialValue)
      },
      template: `<div></div>`,
    })

    expect(wrapper.vm.value).toEqual(initialValue)
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(initialValue))

    wrapper.vm.value.baz.qux = 'qux'

    await nextTick()

    expect(localStorage.getItem(key)).toEqual(
      JSON.stringify({
        foo: 'bar',
        baz: { qux: 'qux' },
      }),
    )
  })

  it('should use value from localStorage if it exists', () => {
    const key = 'test-key'
    localStorage.setItem(key, '"test"')

    const wrapper = mount({
      setup() {
        return useLocalStorage(key, 'default')
      },
    })

    expect(wrapper.vm.value).toEqual('test')
  })

  it.skip('should react to changes in localStorage', () => {
    // TODO: Test 'storage' event handling
  })
})
