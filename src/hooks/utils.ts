export const loadStore = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    const saved = window.localStorage.getItem(key)
    if (saved !== null) {
      return JSON.parse(saved)
    }
  }
  return defaultValue
}

export const saveStore = (key, value) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}
