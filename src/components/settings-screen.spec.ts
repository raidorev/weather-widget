import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import { locationsKey } from '@/injection-keys'
import { locationsInjectionMock } from '@/tests/mocks/locations-injection'
import type { Location } from '@/types/weather'

import SearchBar from './search-bar.vue'
import SettingsScreen from './settings-screen.vue'

describe('settings-screen', () => {
  it('should have h4 with "Settings" text', () => {
    const wrapper = mount(SettingsScreen, {
      global: {
        provide: {
          [locationsKey as symbol]: locationsInjectionMock,
        },
      },
    })
    expect(wrapper.find('h4').text()).toBe('Settings')
  })

  it('should have close button with icon', () => {
    const wrapper = mount(SettingsScreen, {
      global: {
        provide: {
          [locationsKey as symbol]: locationsInjectionMock,
        },
      },
    })
    const button = wrapper.find('button')
    expect(button.exists()).toBeTruthy()
    expect(button.find('svg').exists()).toBeTruthy()
  })

  it('should emit "close" event when close icon is clicked', () => {
    const wrapper = mount(SettingsScreen, {
      global: {
        provide: {
          [locationsKey as symbol]: locationsInjectionMock,
        },
      },
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('close')).toHaveLength(1)
  })

  it('should have list of locations', () => {
    const locations: Location[] = [
      {
        name: 'Location 1',
        country: 'C',
        latitude: 0,
        longitude: 0,
      },
      {
        name: 'Location 2',
        country: 'C',
        latitude: 0,
        longitude: 0,
      },
    ]

    const wrapper = mount(SettingsScreen, {
      global: {
        provide: {
          [locationsKey as symbol]: { ...locationsInjectionMock, locations },
        },
      },
    })

    // TODO: Mock vuedraggable and fix this test
    // const listItems = wrapper.findAll('li')
    // expect(listItems.length).toBe(locations.length)
  })

  it('should have search-bar component', () => {
    const wrapper = mount(SettingsScreen, {
      global: {
        provide: {
          [locationsKey as symbol]: locationsInjectionMock,
        },
      },
    })
    expect(wrapper.findComponent(SearchBar).exists()).toBeTruthy()
  })
})
