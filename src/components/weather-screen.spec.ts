import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import WeatherScreen from './weather-screen.vue'

describe('weather-screen', () => {
  it('should have settings button with icon', () => {
    const wrapper = mount(WeatherScreen)
    const button = wrapper.find('button')
    expect(button.exists()).toBeTruthy()
    expect(button.find('svg').exists()).toBeTruthy()
  })

  it('should emit "open-settings" event when close icon is clicked', () => {
    const wrapper = mount(WeatherScreen)
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('open-settings')).toHaveLength(1)
  })
})
