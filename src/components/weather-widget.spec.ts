import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SettingsScreen from './settings-screen.vue'
import WeatherScreen from './weather-screen.vue'
import WeatherWidget from './weather-widged.ce.vue'

describe.concurrent('weather-widget', () => {
  it('should display weather screen by default', () => {
    const wrapper = mount(WeatherWidget)
    expect(wrapper.findComponent(WeatherScreen).isVisible()).toBeTruthy()
    expect(wrapper.findComponent(SettingsScreen).exists()).toBeFalsy()
  })

  it('should switch screen when button clicked', async () => {
    const wrapper = mount(WeatherWidget)

    await wrapper.find('button').trigger('click')

    expect(wrapper.findComponent(WeatherScreen).exists()).toBeFalsy()
    expect(wrapper.findComponent(SettingsScreen).isVisible()).toBeTruthy()

    await wrapper.find('button').trigger('click')

    expect(wrapper.findComponent(WeatherScreen).isVisible()).toBeTruthy()
    expect(wrapper.findComponent(SettingsScreen).exists()).toBeFalsy()
  })
})
