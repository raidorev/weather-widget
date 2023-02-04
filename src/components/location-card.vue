<script setup lang="ts">
import IconLoading from '@/components/icons/icon-loading.vue'
import WeatherInfo from '@/components/weather-info.vue'
import { useWeather } from '@/composables/weather'
import type { Location } from '@/types/weather'

const props = defineProps<{ location: Location }>()

const { weather, isLoading } = useWeather(props.location)
</script>

<template>
  <div class="mb-10 last:mb-0">
    <div v-if="isLoading">
      <div class="flex items-center justify-center p-4">
        <icon-loading class="w-20 animate-spin" />
      </div>
    </div>
    <div v-else-if="weather">
      <weather-info :location="location" :weather="weather" />
    </div>
    <div v-else>
      <p>Something went wrong.</p>
    </div>
  </div>
</template>
