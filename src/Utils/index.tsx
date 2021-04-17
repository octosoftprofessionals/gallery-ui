export const deltaTime = (start: Date) => {
  let current = new Date()
  let delta = start - current
  return delta
}

export const timeFormat = (delta: number) => {
  let timeString = ''
  let _second = 1000
  let _minute = _second * 60
  let _hour = _minute * 60
  let _day = _hour * 24

  let hour = Math.floor((delta % _day) / _hour)
  let min = Math.floor((delta % _hour) / _minute)
  let sec = Math.floor((delta % _minute) / _second)

  if (hour > 0) {
    timeString += `${hour}h ${min}m ${sec}s`
  } else if (hour === 0 && min > 0) {
    timeString += `${min}m ${sec}s`
  } else {
    timeString += `${sec}s`
  }

  return timeString
}