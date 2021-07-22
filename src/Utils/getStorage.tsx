export const getInfoStorage = (value: string) => {
  if (typeof window !== 'undefined') {
    let infoValue = window.localStorage.getItem(value)
    return JSON.parse(infoValue)
  }
  return undefined
}
