import { DateTime } from 'luxon'

export const deltaTime = (expiration: string | DateTime | Date) => {
  let expiration_datetime =
    typeof expiration === 'string'
      ? DateTime.fromISO(expiration)
      : expiration instanceof Date
      ? DateTime.fromJSDate(expiration)
      : expiration
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
  let _month = _day * 30

  let day = Math.floor((delta % _month) / _day)
  let hour = Math.floor((delta % _day) / _hour)
  let min = Math.floor((delta % _hour) / _minute)
  let sec = Math.floor((delta % _minute) / _second)

  if (day > 0) {
    timeString += `${day}d ${hour}h ${min}m`
  } else if (day === 0 && hour > 0) {
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
  let _month = _day * 30

  let Day = Math.floor((delta % _month) / _day)
  let Hours = Math.floor((delta % _day) / _hour)
  let Minutes = Math.floor((delta % _hour) / _minute)
  let Seconds = Math.floor((delta % _minute) / _second)

  return { Day, Hours, Minutes, Seconds }
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

const formatNumberWithCommas = x => {
  const [integral = '0', fractional = '0'] = x.toString().split('.')
  const integral_with_commas = integral.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  return [integral_with_commas, fractional].join('.')
}
export const formatUsd = numberish => {
  if (numberish == null) {
    return '-'
  }
  return `$${formatNumberWithCommas(formatDecimal(numberish, 2))}`
}

export const minValueToBid = (value: number, currentMaxBid: number) => {
  if (value > currentMaxBid && value >= 0.01) {
    return false
  }
  return true
}

export const linkStorage = () => {
  // transfers sessionStorage from one tab to another
  let sessionStorage_transfer = function (event) {
    if (!event) {
      event = window.event
    } // ie suq
    if (!event.newValue) return // do nothing if no value to work with
    if (event.key == 'getSessionStorage') {
      // another tab asked for the sessionStorage -> send it
      localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage))
      // the other tab should now have it, so we're done with it.
      localStorage.removeItem('sessionStorage') // <- could do short timeout as well.
    } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
      // another tab sent data <- get it
      let data = JSON.parse(event.newValue)
      for (let key in data) {
        sessionStorage.setItem(key, data[key])
      }
    }
  }

  // listen for changes to localStorage
  if (window.addEventListener) {
    window.addEventListener('storage', sessionStorage_transfer, false)
  } else {
    window.attachEvent('onstorage', sessionStorage_transfer)
  }

  // Ask other tabs for session storage (this is ONLY to trigger event)
  if (!sessionStorage.length) {
    localStorage.setItem('getSessionStorage', 'foobar')
    localStorage.removeItem('getSessionStorage', 'foobar')
  }
}

export const findeArtwork = (arry, assetId, status) => {
  let res = {}
  arry.forEach(
    arry => (res = arry.find(artwork => artwork.assetId === assetId))
  )
  res.isFavorite = status
}
