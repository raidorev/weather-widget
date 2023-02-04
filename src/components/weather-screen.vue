<script setup lang="ts">
import IconSettings from '@/components/icons/icon-settings.vue'
import { useLocations } from '@/composables/locations'
import LocationCard from './location-card.vue'

const emit = defineEmits<{
  (event: 'open-settings'): void
}>()

const { locations } = useLocations()
</script>

<template>
  <div class="relative p-4">
    <button
      class="absolute top-0 right-0 m-4 hover:text-gray-500"
      @click="emit('open-settings')"
    >
      <icon-settings class="h-6 w-6" />
    </button>

    <location-card
      v-for="(location, i) in locations"
      :key="i"
      :location="location"
    />
  </div>
</template>
