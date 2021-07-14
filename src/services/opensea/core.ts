import axios from 'axios'
// import axiosRateLimit from 'axios-rate-limit'
import urlJoin from 'url-join'
import config from '../../config'

const ROOT = urlJoin(config.API_URL, '/opensea')

const http = axios

// const http = axiosRateLimit(axios.create(), {
//   maxRequests: 2,
//   perMilliseconds: 1000,
// })

const get = async (url, queryParams = {}) => {
  return await http.get(url, { params: queryParams })
}

// https://docs.opensea.io/reference#retrieving-a-single-asset
export const getAsset = async ({ assetContractAddress, assetTokenId }) => {
  const url = `${ROOT}/asset/${assetContractAddress}/${assetTokenId}`
  const res = await get(url)
  const asset = res.data ?? {}
  return asset
}

// https://docs.opensea.io/reference#getting-assets
export const getAssets = async (queryParams = {}) => {
  const url = `${ROOT}/assets`
  const res = await get(url, queryParams)
  const assets = res.data ?? []
  return assets
}

// https://docs.opensea.io/reference#retrieving-asset-events
export const getEvents = async (queryParams = {}) => {
  const url = `${ROOT}/events`
  const res = await get(url, queryParams)
  const events = res.data ?? []
  return events
}

// https://docs.opensea.io/reference#retrieving-collections
export const getCollections = async (queryParams = {}) => {
  const url = `${ROOT}/collections`
  const res = await get(url, queryParams)
  const collections = res.data ?? []
  return collections
}
