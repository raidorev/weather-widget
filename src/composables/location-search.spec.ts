import { flushPromises, mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { nextTick } from 'vue'

import { useLocationSearch } from './location-search'

describe.concurrent('location-search', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should have empty query, empty error and no items by default', () => {
    const wrapper = mount({
      setup() {
        return useLocationSearch()
      },
      template: '<div />',
    })

    const { error, isLoading, query, items } = wrapper.vm
    expect(error).toBe('')
    expect(query).toBe('')
    expect(isLoading).toBe(false)
    expect(items.length).toBe(0)
  })

  it('should call API for location data', async () => {
    const wrapper = mount({
      setup() {
        return useLocationSearch()
      },
      template: '<div />',
    })

    wrapper.vm.query = 'London'

    await nextTick()
    vi.advanceTimersByTime(1000)
    await flushPromises()

    expect(wrapper.vm.isLoading).toBe(false)
    expect(wrapper.vm.items.length).toBeGreaterThan(0)
  })

  it('should not call API for location data if query is too short', async () => {
    const wrapper = mount({
      setup() {
        return useLocationSearch()
      },
      template: '<div />',
    })

    wrapper.vm.query = 'Lo'

    await nextTick()
    vi.advanceTimersByTime(1000)
    await flushPromises()

    expect(wrapper.vm.items.length).toBe(0)
  })

  it('should debounce API calls', async () => {
    const fetchSpy = vi.spyOn(global, 'fetch')

    const wrapper = mount({
      setup() {
        return useLocationSearch()
      },
      template: '<div />',
    })

    wrapper.vm.query = 'London'
    await nextTick()
    wrapper.vm.query = 'London1'
    await nextTick()
    wrapper.vm.query = 'London12'
    await nextTick()
    wrapper.vm.query = 'London123'
    await nextTick()

    vi.advanceTimersByTime(1000)
    await flushPromises()

    expect(fetchSpy).toHaveBeenCalledTimes(1)
  })
})
