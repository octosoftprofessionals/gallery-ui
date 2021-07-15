import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'
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

const ROOT = config.API_URL || 'http://localhost:3000/v1'

const http = axiosRateLimit(axios.create(), {
  maxRequests: 5,
  perMilliseconds: 1000,
})

const get = async (url, queryParams = {}) => {
  return await http.get(url, { params: queryParams })
}

export const featuredItemsQuery = async (queryParams = {}) => {
  const url = `${ROOT}/gallery/featured-items`
  const res = await get(url, queryParams)
  const itemsQuery = res.data ?? []
  return itemsQuery
}

export const galleryItemQuery = async ({
  assetContractAddress,
  assetTokenId,
}) => {
  const url = `${ROOT}/gallery/gallery-item/${assetContractAddress}/${assetTokenId}`
  const res = await get(url)
  const galleryItem = res.data ?? {}
  return galleryItem
}

export const accountProfileQuery = async ({ address }) => {
  const url = `${ROOT}/gallery/profile/${address}/account`
  const res = await get(url)
  const accountProfile = res.data ?? {}
  return accountProfile
}

export const createdItemsQuery = async ({ address }) => {
  const url = `${ROOT}/gallery/profile/${address}/created-items`
  const res = await get(url)
  const createdItems = res.data ?? {}
  return createdItems
}

export const ownedItemsQuery = async ({ address }) => {
  const url = `${ROOT}/gallery/profile/${address}/owned-items`
  const res = await get(url)
  const ownedItems = res.data ?? {}
  return ownedItems
}
