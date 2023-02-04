<script setup lang="ts">
import { ref } from 'vue'
import SettingsScreen from '@/components/settings-screen.vue'
import WeatherScreen from '@/components/weather-screen.vue'
import { useLocations } from '@/composables/locations'

const isSettingsOpen = ref(false)

const { tryToAddCurrentLocation, locations } = useLocations()
tryToAddCurrentLocation()

</script>

<template>
  <div class="w-80">
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
