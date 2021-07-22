export const getInfoStorage = (value: string) => {
  let infoValue = ''
  if (typeof window !== 'undefined') {
    infoValue = window.localStorage.getItem(value)
  }
  return JSON.parse(infoValue)
}
