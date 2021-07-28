export const truncateString = (value: string, num: number) => {
  if (value.length <= num) {
    return value
  }
  return value.slice(0, num) + '...'
}