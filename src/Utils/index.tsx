import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
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

  let Days = Math.floor((delta % _month) / _day)
  let Hours = Math.floor((delta % _day) / _hour)
  let Minutes = Math.floor((delta % _hour) / _minute)
  let Seconds = Math.floor((delta % _minute) / _second)

  return { Days, Hours, Minutes, Seconds }
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

export const formatDecimal = (numberish, decimals = 2) => {
  if (numberish === 'NaN') {
    return '—'
  }
  let [integral, fractional] = String(numberish).split('.')
  integral.length === 1 && (integral = '0' + integral)
  if (fractional === undefined) {
    fractional = '00'
  } else if (fractional.length === 1) {
    fractional = fractional + '0'
  } else {
    fractional.length > decimals && (fractional = fractional.slice(0, 2))
  }
  return `${integral}.${fractional}`
}

const formatNumberWithCommas = x => {
  const [integral = '0', fractional = '0'] = x.toString().split('.')
  const integral_with_commas = integral.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  const padded_fractional =
    fractional.length === 1 ? `0${fractional}` : fractional
  return [integral_with_commas, padded_fractional].join('.')
}
export const formatUsd = numberish => {
  if (numberish == 'NaN') {
    return '—'
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
      if (typeof window !== 'undefined') {
        event = window.event
      } else {
        return
      }
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
        localStorage.setItem(key, data[key])
      }
    }
  }

  if (typeof window !== 'undefined') {
    if (window.addEventListener) {
      // listen for changes to localStorage
      window.addEventListener('storage', sessionStorage_transfer, false)
    } else {
      window.attachEvent('onstorage', sessionStorage_transfer)
    }
  }

  // Ask other tabs for session storage (this is ONLY to trigger event)
  if (!localStorage.length) {
    localStorage.setItem('getSessionStorage', 'foobar')
    localStorage.removeItem('getSessionStorage', 'foobar')
  }
}

export const findArtwork = (arry, assetId, status) => {
  arry.forEach(arry => {
    const res = arry.find(artwork => artwork.assetId === assetId)
    if (res) {
      res.isFavorite = status
    }
  })
}

export const findArtworkFavorites = (arry, assetId, status) => {
  arry.forEach(({ favoriteArtworks }) => {
    const res = favoriteArtworks.find(artwork => artwork.assetId === assetId)
    if (res) {
      res.isFavorite = status
    }
  })
}

export const isError = (e: any): boolean =>
  e &&
  e.stack &&
  e.message &&
  typeof e.stack === 'string' &&
  typeof e.message === 'string'

export const formatEthersFromBigNumber = (bn: BigNumber = new BigNumber(0)) =>
  formatDecimal(ethers.utils.formatUnits(bn.toString()))

export const STATUS_VALUES = {
  onAuction: 'on_auction',
  buyNow: 'buy_now',
  none: 'none',
}

export const getCarouselArtworks = (liveAuctionItems, buyNowItems) => {
  const carouselArtworks = []
  const {
    pages: [pagesAuctions],
  } = liveAuctionItems
  const {
    pages: [pagesBuyNow],
  } = buyNowItems

  if (pagesAuctions.length >= 4) {
    pagesAuctions.slice(0, 4).forEach((artwork: GalleryItem) => {
      carouselArtworks.push(artwork)
    })
  } else if (pagesAuctions.length < 4 && pagesBuyNow.length > 0) {
    pagesAuctions.forEach((artwork: GalleryItem) => {
      carouselArtworks.push(artwork)
    })
    let emptyPosition = 4 - carouselArtworks.length
    pagesBuyNow.slice(0, emptyPosition).forEach((artwork: GalleryItem) => {
      carouselArtworks.push(artwork)
    })
  }
  return carouselArtworks
}

export const ethereumIoLinkTx = (transactionHash: string) => {
  if (transactionHash) {
    return `https://etherscan.io/tx/${transactionHash}`
  }
  return '#'
}

export const checkBalance = (balanceWETH, priceEth) =>
  (parseFloat(balanceWETH) >= parseFloat(priceEth))
