import { locationsStorageKey } from '@/config'
import type { Location } from '@/types/weather'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { useLocations } from './locations'

describe.concurrent('locations', () => {
  it('should have no locations by default', () => {
    const wrapper = mount({
      setup() {
        return useLocations()
      },
      template: '<div />',
    })

    const { locations } = wrapper.vm

    expect(locations).toHaveLength(0)
  })

  it('should add location', () => {
    const wrapper = mount({
      setup() {
        return useLocations()
      },
      template: '<div />',
    })

    const { locations, addLocation, removeLocation } = wrapper.vm

    addLocation({
      name: 'Paris',
      country: 'FR',
      latitude: 48.8566,
      longitude: 2.3522,
    })
    expect(locations).toHaveLength(1)

    removeLocation(0)
  })

  it('should remove location', () => {
    const paris: Location = {
      name: 'Paris',
      country: 'FR',
      latitude: 48.8566,
      longitude: 2.3522,
    }
    const paris2: Location = {
      name: 'Paris 2',
      country: 'FR',
      latitude: 48.8566,
      longitude: 2.3522,
    }

    const wrapper = mount({
      setup() {
        return useLocations()
      },
      template: '<div />',
    })

    const { locations, addLocation, removeLocation } = wrapper.vm

    addLocation(paris)
    addLocation(paris2)

    removeLocation(1)

    expect(locations).toHaveLength(1)
    expect(locations[0]).toMatchObject(paris)

    removeLocation(0)
  })

  it('should store locations in localStorage', () => {
    const wrapper = mount({
      setup() {
        return useLocations()
      },
      template: '<div />',
    })

    const { locations } = wrapper.vm

    expect(localStorage.getItem(locationsStorageKey)).toEqual(
      JSON.stringify(locations),
    )
  })
})
