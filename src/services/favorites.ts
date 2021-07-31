import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'
import config from '../config'

const ROOT = config.API_URL || 'http://localhost:3000/v1'

const http = axiosRateLimit(axios.create(), {
  maxRequests: 5,
  perMilliseconds: 1000,
})

// Helper functions

const get = async (url: string) => {
  return await http.get(url)
}

const post = async (url: string) => {
  return await http.post(url)
}

const destroy = async (url: string, queryParams = {}) => {
  return await http.delete(url, { params: queryParams })
}

const update = async (url: string, queryParams = {}) => {
  return await http.put(url, { params: queryParams })
}

export const createAssociationFavoritesArtworks = async ({
  public_address,
  asset_id,
}: {
  public_address: string
  asset_id: number
}) => {
  const url = `${ROOT}/favorites/add/${public_address}/${asset_id}`
  const res = await post(url)
  const favoriteAssociation = res.data ?? {}
  return favoriteAssociation
}

export const getAllFavoritesArtworksFromOneUserByAddress = async (
  public_address: string
) => {
  const url = `${ROOT}/favorites/${public_address}`
  const res = await get(url)
  const userFavoritesArtworks = res.data ?? {}
  return userFavoritesArtworks
}

export const deleteOneFavoriteArtworkFromOneUser = async (
  asset_id: number,
  public_address: string
) => {
  const url = `${ROOT}/favorites/${asset_id}/${public_address}`
  const res = await destroy(url)
  const deletedFavorite = res.data ?? {}
  return deletedFavorite
}

export const updatePriorityOfOneFavoriteArtwork = async (
  asset_id: number,
  public_address: string
) => {
  const url = `${ROOT}/favorites/priority/${asset_id}/${public_address}`
  const res = await update(url)
  const updatePriorityFromAFavoriteArtwork = res.data ?? {}
  return updatePriorityFromAFavoriteArtwork
}
