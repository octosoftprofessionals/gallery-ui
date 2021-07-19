export const getInfoStorage = (value: string) => {
  let infoValue = window.localStorage.getItem(value)
  return JSON.parse(infoValue)
}
