import { ref, type Ref, onMounted, onUnmounted, watchEffect } from 'vue'

const parse = (value: string | null) => {
  try {
    return JSON.parse(value || 'null')
  } catch {
    return value
  }
}

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const value = ref(parse(localStorage.getItem(key)) || initialValue) as Ref<T>

  const storageEventHandler = (event: StorageEvent) => {
    if (event.key === key && event.storageArea === localStorage) {
      value.value = JSON.parse(event.newValue || 'null') as T
    }
  }

  onMounted(() => {
    window.addEventListener('storage', storageEventHandler)
  })

  onUnmounted(() => {
    window.removeEventListener('storage', storageEventHandler)
  })

  watchEffect(() => {
    localStorage.setItem(key, JSON.stringify(value.value))
  })

  return { value }
}
