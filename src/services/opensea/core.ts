import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'
import config from '../../config'
import process from '@types/node' //Not working  
import process from 'node' // Not working either.
// https://stackoverflow.com/questions/44416902/how-to-fix-types-node-index-d-ts-is-not-a-module
//ENV
const { API_URL } = process.env;


const ROOT = API_URL || process.env.NODE_ENV; // Not working

const API_KEY = config.OPENSEA_API_KEY ?? '' // None for now (if so, should come from gallery-api, backend)

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
  const url = `${ROOT}//asset${assetContractAddress}/${assetTokenId}/`
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
