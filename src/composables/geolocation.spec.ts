import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import { navigatorMock } from '@/tests/mocks/navigator'
import { useGeolocation } from './geolocation'

describe('geolocation', () => {
  afterEach(() => {
    global.navigator = navigatorMock
  })

  it("shoud have isSupported value to be false if navigator.geolocation doesn't exist", () => {
    // @ts-ignore
    global.navigator = { geolocation: undefined }

    const wrapper = mount({
      setup() {
        return useGeolocation()
      },
      template: '<div></div>',
    })

    expect(wrapper.vm.isSupported).toBeFalsy()
  })

  it('shoud have isSupported value to be true if navigator.geolocation exist', () => {
    const wrapper = mount({
      setup() {
        return useGeolocation()
      },
      template: '<div></div>',
    })

    expect(wrapper.vm.isSupported).toBeTruthy()
  })

  it('should returns the current geolocation', () => {
    const wrapper = mount({
      setup() {
        return useGeolocation()
      },
      template: '<div></div>',
    })

    expect(wrapper.vm.geolocation).toEqual({
      latitude: 0,
      longitude: 0,
    })
  })
})
