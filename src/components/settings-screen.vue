<script setup lang="ts">
import IconClose from '@/components/icons/icon-close.vue'

const emit = defineEmits<{
  (event: 'close'): void
}>()
</script>

<template>
  <div class="relative p-4">
    <button
      class="absolute top-0 right-0 m-4 hover:text-gray-500"
      @click="emit('close')"
    >
      <icon-close class="h-6 w-6" />
    </button>

    <h4 class="text-xl font-bold">Settings</h4>
  </div>
</template>
