<script setup lang="ts">
import { inject, ref } from 'vue'
import draggable from 'vuedraggable'

import IconBurger from '@/components/icons/icon-burger.vue'
import IconClose from '@/components/icons/icon-close.vue'
import SearchBar from '@/components/search-bar.vue'
import { locationsKey, type LocationsInjection } from '@/injection-keys'

const emit = defineEmits<{
  (event: 'close'): void
}>()

const drag = ref(false)

const dragOptions = ref({
  animation: 200,
  disabled: false,
  ghostClass: 'opacity-50',
})

const { locations, addLocation, removeLocation } = inject(
  locationsKey,
) as LocationsInjection
</script>

<template>
  <div class="relative p-4">
    <button
      class="absolute top-0 right-0 m-4 hover:text-gray-500"
      @click="emit('close')"
    >
      <icon-close class="h-6 w-6" />
    </button>

    <h4 class="mb-3 text-xl font-bold">Settings</h4>

    <div class="mb-3">
      <transition-group>
        <draggable
          key="dragggable"
          tag="ul"
          item-key="name"
          handle=".drag"
          v-bind="dragOptions"
          :list="locations"
          @start="drag = true"
          @end="drag = false"
        >
          <template #item="{ element }">
            <li
              :key="element.name"
              class="mb-2 flex items-center bg-gray-300 p-1 last:mb-0"
            >
              <button class="drag mr-1 flex-none cursor-move">
                <icon-burger class="h-6 w-6" />
              </button>
              <span class="flex-auto">
                {{ element.name }}, {{ element.country }}
              </span>
              <button class="flex-none" @click="removeLocation(element.index)">
                <icon-close class="h-6 w-6" />
              </button>
            </li>
          </template>
        </draggable>
      </transition-group>
    </div>

    <search-bar @select="addLocation">
      <template #label>
        <span class="text-gray-400">Add location:</span>
      </template>
    </search-bar>
  </div>
</template>
