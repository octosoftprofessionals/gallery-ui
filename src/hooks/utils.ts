export const loadStore = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    const saved = window.sessionStorage.getItem(key)
    if (saved !== null) {
      return JSON.parse(saved)
    }
  }
  return defaultValue
}

export const saveStore = (key, value) => {
  if (typeof window !== 'undefined') {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }
}
