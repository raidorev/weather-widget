import type { Location } from '@/types/weather'
import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import IconLoading from './icons/icon-loading.vue'
import LocationCard from './location-card.vue'
import WeatherInfo from './weather-info.vue'

describe('location-card', () => {
  const location = {
    name: 'London',
    country: 'UK',
    latitude: 51.5074,
    longitude: 0.1278,
  } as Location

  it('should show loading at first', () => {
    const wrapper = mount(LocationCard, {
      props: { location },
    })
    expect(wrapper.findComponent(IconLoading).exists()).toBeTruthy()
    expect(wrapper.findComponent(WeatherInfo).exists()).toBeFalsy()
  })

  it('should render weather-info component after successful loading', async () => {
    const wrapper = mount(LocationCard, {
      props: { location },
    })

    await flushPromises()

    expect(wrapper.findComponent(IconLoading).exists()).toBeFalsy()
    expect(wrapper.findComponent(WeatherInfo).exists()).toBeTruthy()
  })

  it('should render error message after failed loading', async () => {
    // TODO: Mock the API call to return an error
  })
})
