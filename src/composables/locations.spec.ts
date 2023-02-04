import type { Location } from '@/types/weather'
import { describe, it, expect } from 'vitest'
import { useLocations } from './locations'

describe.concurrent.skip('locations', () => {
  it('should have 3 example locations by default', () => {
    const { locations } = useLocations()
    expect(locations.value).toHaveLength(3)
  })

  it('should add location', () => {
    const { locations, addLocation, removeLocation } = useLocations()
    addLocation({
      name: 'Paris',
      country: 'FR',
      latitude: 48.8566,
      longitude: 2.3522,
    })
    expect(locations.value).toHaveLength(4)

    removeLocation(3)
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

    const { locations, addLocation, removeLocation } = useLocations()

    addLocation(paris)
    addLocation(paris2)

    removeLocation(4)

    expect(locations.value).toHaveLength(4)
    expect(locations.value[3]).toMatchObject(paris)

    removeLocation(4)
  })

  it('should store locations in localStorage', () => {
    const { locations } = useLocations()

    expect(localStorage.getItem('locations')).toEqual(
      JSON.stringify(locations.value),
    )
  })
})
