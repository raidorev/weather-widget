<script setup lang="ts">
import { provide, ref } from 'vue'
import SettingsScreen from '@/components/settings-screen.vue'
import WeatherScreen from '@/components/weather-screen.vue'
import { useLocations } from '@/composables/locations'
import { locationsKey } from '@/injection-keys'

const isSettingsOpen = ref(false)

const { tryToAddCurrentLocation, locations, addLocation, removeLocation } =
  useLocations()
tryToAddCurrentLocation()

provide(locationsKey, {
  locations,
  addLocation,
  removeLocation,
})
</script>

<template>
  <div class="w-80 font-sans">
    <settings-screen v-if="isSettingsOpen" @close="isSettingsOpen = false" />
    <weather-screen v-else @open-settings="isSettingsOpen = true" />
  </div>
</template>

<style>
/** Import Tailwind CSS for injecting styles into the shadow DOM */
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
