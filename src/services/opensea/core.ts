import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'
import config from '../../config'

const ROOT = config.API_URL || 'localhost:3000';

const API_KEY = config.OPENSEA_API_KEY ?? ''

const DEFAULT_HEADERS = {
  'X-API-KEY': API_KEY,
}

const OPTIONS = {
  headers: DEFAULT_HEADERS,
}

const http = axiosRateLimit(axios.create(), {
  maxRequests: 2,
  perMilliseconds: 1000,
})

const get = async (url, queryParams = {}) => {
  return await http.get(url, { params: queryParams, ...OPTIONS })
}

// https://docs.opensea.io/reference#retrieving-a-single-asset
export const getAsset = async ({ assetContractAddress, assetTokenId }) => {
  const url = `${ROOT}/asset/${assetContractAddress}/${assetTokenId}/`
  const res = await get(url)
  const asset = res.data ?? {}
  return asset
}

// https://docs.opensea.io/reference#getting-assets
export const getAssets = async (queryParams = {}) => {
  const url = `${ROOT}/assets`
  const res = await get(url, queryParams)
  const assets = res.data?.assets ?? []
  return assets
}

// https://docs.opensea.io/reference#retrieving-asset-events
export const getEvents = async (queryParams = {}) => {
  const url = `${ROOT}/events`
  const res = await get(url, queryParams)
  const events = res.data?.asset_events ?? []
  return events
}

// https://docs.opensea.io/reference#retrieving-collections
export const getCollections = async (queryParams = {}) => {
  const url = `${ROOT}/collections`
  const res = await get(url, queryParams)
  const collections = res.data ?? []
  return collections
}
