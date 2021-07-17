import axios from 'axios'
// import axiosRateLimit from 'axios-rate-limit'
import urlJoin from 'url-join'
import config from '../config'
import { GalleryItem, CreatorProps } from '../types'

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
}): Promise<GalleryItem> => {
  const url = `${ROOT}/gallery-item/${assetContractAddress}/${assetTokenId}`
  const res = await get(url)
  return res.data ?? {}
}

export const getProfileAccountByAddress = async (
  address: string
): Promise<CreatorProps> => {
  const url = `${ROOT}/profile/${address}/account`
  const res = await get(url)
  return res.data ?? {}
}

export const getProfileCreatedItemsByAddress = async (
  address: string
): Promise<GalleryItem[]> => {
  const url = `${ROOT}/profile/${address}/created-items`
  const res = await get(url)
  return res.data ?? []
}

export const getProfileOwnedItemsByAddress = async (
  address: string
): Promise<GalleryItem[]> => {
  const url = `${ROOT}/profile/${address}/owned-items`
  const res = await get(url)
  return res.data ?? []
}
