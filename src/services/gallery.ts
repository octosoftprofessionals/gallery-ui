import axios from 'axios'
// import axiosRateLimit from 'axios-rate-limit'
import urlJoin from 'url-join'
import config from '../config'

// Types

enum GalleryItemStatus {
  reserve = 'reserve',
  listed = 'listed',
  sold = 'sold',
}

export type GalleryItem = {
  // identifiers
  // contract & token reference metadata
  assetId: string
  assetContractAddress: string
  assetTokenId: string

  // core item metadata
  title: string
  description: string

  // media
  imageUrl: string
  videoUrl?: string

  // creator
  creatorUsername: string
  creatorImageUrl: string
  creatorAddress: string

  // owner
  ownerUsername: string
  ownerImageUrl: string
  ownerAddress: string

  // status
  status: GalleryItemStatus

  // price
  priceEth?: string
  priceUsd?: string

  // history
  historyItems: HistoryItem[]

  // open offers
  // - offers

  // auction
  expiration: string // iso8601
  // - highest bid
  // - all bids
}

const ROOT = urlJoin(config.API_URL, '/gallery')

const http = axios
// const http = axiosRateLimit(axios.create(), {
//   maxRequests: 5,
//   perMilliseconds: 1000,
// })

const get = async (url, queryParams = {}) => {
  return await http.get(url, { params: queryParams })
}

export const featuredItemsQuery = async (queryParams = {}) => {
  const url = `${ROOT}/featured-items`
  const res = await get(url, queryParams)
  return res.data ?? []
}

export const galleryItemQuery = async ({
  assetContractAddress,
  assetTokenId,
}) => {
  const url = `${ROOT}/gallery-item/${assetContractAddress}/${assetTokenId}`
  const res = await get(url)
  return res.data ?? {}
}

export const getProfileAccountByAddress = async (address: string) => {
  const url = `${ROOT}/profile/${address}/account`
  const res = await get(url)
  return res.data ?? {}
}

export const getProfileCreatedItemsByAddress = async (address: string) => {
  const url = `${ROOT}/profile/${address}/created-items`
  const res = await get(url)
  return res.data ?? []
}

export const getProfileOwnedItemsByAddress = async (address: string) => {
  const url = `${ROOT}/profile/${address}/owned-items`
  const res = await get(url)
  return res.data ?? []
}
