import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SettingsScreen from './settings-screen.vue'

describe('settings-screen', () => {
  it('should have h4 with "Settings" text', () => {
    const wrapper = mount(SettingsScreen)
    expect(wrapper.find('h4').text()).toBe('Settings')
  })

  it('should have close button with icon', () => {
    const wrapper = mount(SettingsScreen)
    const button = wrapper.find('button')
    expect(button.exists()).toBeTruthy()
    expect(button.find('svg').exists()).toBeTruthy()
  })

  it('should emit "close" event when close icon is clicked', () => {
    const wrapper = mount(SettingsScreen)
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('close')).toHaveLength(1)
  })
})
