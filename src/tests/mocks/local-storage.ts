const storage = new Map<string, string>()

export const localStorageMock = {
  getItem(key: string) {
    // Storage.prototype.getItem() returns null if the key doesn't exist
    // eslint-disable-next-line unicorn/no-null
    return storage.get(key) || null
  },

  setItem(key: string, value: string) {
    storage.set(key, value)
  },

  removeItem(key: string) {
    storage.delete(key)
  },

  clear() {
    storage.clear()
  },

  get length() {
    return storage.size
  },
} as Storage
