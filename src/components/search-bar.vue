<script setup lang="ts">
import IconLocation from '@/components/icons/icon-location.vue'
import IconSearch from '@/components/icons/icon-search.vue'
import { useLocationSearch } from '@/composables/location-search'
import type { Location } from '@/types/weather'

const emit = defineEmits<{
  (event: 'select', location: Location): void
}>()

const { query, items, isLoading } = useLocationSearch()

const selectLocation = (index: number) => {
  query.value = ''
  emit('select', items.value[index])
}
</script>

<template>
  <div class="inline-flex w-full flex-col justify-center text-gray-500">
    <label>
      <slot name="label" />
      <div class="relative">
        <input
          v-model="query"
          type="text"
          class="w-full rounded border border-gray-200 bg-gray-200 p-2 pl-8 focus:border-transparent focus:bg-white focus:outline-none focus:ring-2"
          placeholder="Start typing..."
        />
        <icon-search class="absolute left-2.5 top-3.5" />
      </div>
    </label>
    <template v-if="query.length > 0">
      <div v-if="isLoading" class="text-center text-gray-400">Loading...</div>
      <ul
        v-else-if="items.length > 0"
        class="mt-2 w-full border border-gray-100 bg-white"
      >
        <li
          v-for="({ name, country }, index) in items"
          :key="index"
          class="relative cursor-pointer border-b-2 border-gray-100 py-1 pl-8 pr-2 hover:bg-gray-50 hover:text-gray-900"
          @click="selectLocation(index)"
        >
          <icon-location />
          {{ name }} - {{ country }}
        </li>
      </ul>
      <div v-else class="text-center text-gray-400">No results</div>
    </template>
  </div>
</template>
