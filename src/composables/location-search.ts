import { computed, onBeforeUnmount, ref, watchEffect } from 'vue'

import { apiKey } from '@/config'
import { debounce } from '@/helpers/debounce'
import type { Location } from '@/types/weather'

/**
 * Use OpenWeatherMap API to search for locations by some query
 */
export const useLocationSearch = (
  options: { minimalQueryLength?: number } = {},
) => {
  const { minimalQueryLength = 3 } = options

  const isLoading = ref(false)
  const error = ref('')

  const query = ref('')

  const url = computed(
    () =>
      `https://api.openweathermap.org/geo/1.0/direct?q=${query.value}&limit=5&appid=${apiKey}`,
  )

  const items = ref<Location[]>([])

  const search = debounce(async () => {
    isLoading.value = true

    try {
      const response = await fetch(url.value)
      const data = await response.json()
      items.value = data.map(
        (item: any): Location => ({
          name: item.name,
          country: item.country,
          latitude: item.lat,
          longitude: item.lon,
        }),
      )
    } catch {
      // TODO: Make error more specific
      error.value = 'Failed to fetch search results'
    } finally {
      isLoading.value = false
    }
  }, 500)

  watchEffect(() => {
    if (!query.value) {
      items.value = []
      return
    }

    if (query.value.length < minimalQueryLength) {
      return
    }

    search()
  })

  onBeforeUnmount(() => {
    search.cancel()
  })

  return { query, items, isLoading, error }
}
