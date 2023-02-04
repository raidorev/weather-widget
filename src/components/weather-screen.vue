<script setup lang="ts">
import { inject } from 'vue'

import IconSettings from '@/components/icons/icon-settings.vue'
import { locationsKey, type LocationsInjection } from '@/injection-keys'

import LocationCard from './location-card.vue'

const emit = defineEmits<{
  (event: 'open-settings'): void
}>()

const { locations } = inject(locationsKey) as LocationsInjection
</script>

<template>
  <div class="relative p-4">
    <button
      class="absolute top-0 right-0 m-4 hover:text-gray-500"
      @click="emit('open-settings')"
    >
      <icon-settings class="h-6 w-6" />
    </button>

    <template v-if="locations.length > 0">
      <location-card
        v-for="(location, i) in locations"
        :key="i"
        :location="location"
      />
    </template>
    <span v-else>
      No locations added yet. Click the settings button to add one.
    </span>
  </div>
</template>
