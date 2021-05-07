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

export const timerArray = (delta: number) => {
  let _second = 1000
  let _minute = _second * 60
  let _hour = _minute * 60
  let _day = _hour * 24

  let Hours = Math.floor((delta % _day) / _hour)
  let Minutes = Math.floor((delta % _hour) / _minute)
  let Seconds = Math.floor((delta % _minute) / _second)

  return { Hours, Minutes, Seconds }
}

export const checkTypeVideo = (typeVide: String) => {
  switch (typeVide) {
    case 'video/mp4':
      return true
      break
    case 'video/webm':
      return true
      break
    case 'video/ogg':
      return true
      break
    case 'video/3gpp':
      return true
      break
    case 'video/3gpp2':
      return true
      break
    default:
      return false
      break
  }
}
