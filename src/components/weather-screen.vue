<script setup lang="ts">
import IconSettings from '@/components/icons/icon-settings.vue'
import { useLocations } from '@/composables/locations'

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

    <h4 class="text-xl font-bold">Weather</h4>

    <div
      v-for="(location, index) in locations"
      :key="index"
      class="mb-2 border border-black last:mb-0"
    >
      {{ location.name }}
    </div>
  </div>
</template>
