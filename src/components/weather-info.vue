<script setup lang="ts">
import IconDewPoint from '@/components/icons/icon-dew-point.vue'
import IconHumidity from '@/components/icons/icon-humidity.vue'
import IconPressure from '@/components/icons/icon-pressure.vue'
import IconVisibility from '@/components/icons/icon-visibility.vue'
import IconWind from '@/components/icons/icon-wind.vue'
import { capitalize } from '@/helpers/capitalize'
import type { Location, Weather } from '@/types/weather'

defineProps<{ location: Location; weather: Weather }>()

/**
 * Display distance in meters or kilometers
 */
const displayDistance = (distance: number) => {
  if (distance < 1000) {
    return `${distance}m`
  }

  return `${(distance / 1000).toFixed(1)}km`
}
</script>

<template>
  <div class="flex items-center justify-between">
    <h4 class="text-xl font-bold">
      {{ location.name }}, {{ location.country }}
    </h4>
  </div>
  <div class="my-1 flex items-center">
    <img :src="weather.icon" alt="Weather condition icon" />
    <span class="text-4xl font-bold">{{ weather.tempeture }}°C</span>
  </div>

  <div class="mb-3 flex items-center">
    Feels like {{ weather.feelsLike }}°C. {{ capitalize(weather.description) }}.
  </div>

  <div class="mb-3 flex items-center">
    <div class="flex flex-1 items-center">
      <icon-wind class="mr-1 h-4 w-4" />
      <span>{{ weather.windSpeed }}m/s {{ weather.windDirection }}</span>
    </div>
    <div class="flex flex-1 items-center">
      <icon-pressure class="mr-1 h-4 w-4" />
      <span>{{ weather.pressure }}hPa</span>
    </div>
  </div>

  <div class="mb-3 flex items-center">
    <div class="flex flex-1 items-center">
      <icon-humidity class="mr-1 h-4 w-4" />
      <span>Humidity: {{ weather.humidity }}%</span>
    </div>
    <div class="flex flex-1 items-center">
      <icon-dew-point class="mr-1 h-4 w-4" />
      <span>Dew point: {{ weather.dewPoint }}°C</span>
    </div>
  </div>

  <div class="flex items-center">
    <icon-visibility class="mr-1 h-4 w-4" />
    <span>Visibility: {{ displayDistance(weather.visibility) }}</span>
  </div>
</template>
