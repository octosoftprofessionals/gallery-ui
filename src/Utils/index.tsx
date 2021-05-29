import { DateTime } from 'luxon'

export const deltaTime = (expiration: string | DateTime | Date) => {
  let expiration_datetime = typeof expiration === 'string' ? DateTime.fromISO(expiration) : expiration instanceof Date ? DateTime.fromJSDate(expiration) : expiration
  let now = DateTime.utc()
  let delta = expiration_datetime - now
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

export const isTypeVideo = (typeVide: String) => {
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

export const paginatedQuery = (Query: Array[]) => {
  const pages = []
  for (let index = 0; index < Query.length / 12; index++) {
    pages[index] = Query.slice(index * 12, index * 12 + 12)
  }
  return pages
}

export const formatDecimal = (numberish, decimals = 3) => {
  if (numberish == null) {
    return '-'
  }
  const [integral = '0', fractional = '0'] = String(numberish).split('.')
  return `${integral}.${fractional.slice(0, decimals)}`
}

const formatNumberWithCommas = (x) => {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}
export const formatUsd = (numberish) => {
  if (numberish == null) {
    return '-'
  }
  return `$${formatNumberWithCommas(formatDecimal(numberish, 2))}`
}
