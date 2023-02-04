import { computed, onMounted, ref, watchEffect } from 'vue'

interface Geolocation {
  readonly latitude: number
  readonly longitude: number
}

export const useGeolocation = () => {
  const isSupported = ref(navigator.geolocation !== undefined)
  onMounted(() => {
    isSupported.value = navigator.geolocation !== undefined
  })

  const geolocation = ref<Geolocation | undefined>()
  const error = ref<GeolocationPositionError | undefined>()

  const isLoading = computed(
    () => geolocation.value === undefined && error.value === undefined,
  )

  const updateGeolocation = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords
    geolocation.value = { latitude, longitude }
  }

  watchEffect(() => {
    if (isSupported.value) {
      navigator.geolocation.getCurrentPosition(updateGeolocation, (error_) => {
        error.value = error_
      })
    }
  })

  return { geolocation, error, isLoading, isSupported }
}
