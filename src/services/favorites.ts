import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'
import config from '../config'

export type FavoritesArtworks = {
  id: number
  user_id: number
  user_address: string
  artwork_id: number
  priority: number
}

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

export const createAssociationFavoritesArtworks = async () => {
  const url = `${ROOT}/favorites`
  const res = await post(url)
  const favoriteAssociation = res.data ?? {}
  return favoriteAssociation
}

export const getAllFavoritesArtworksFromOneUserById = async (user_id: number) => {
  const url = `${ROOT}/favorites/${user_id}`
  const res = await get(url)
  const userFavoritesArtworks = res.data ?? {}
  return userFavoritesArtworks
}


export const deleteOneFavoriteArtworkFromOneUser = async (
  artwork_id: number,
  user_id: number
) => {
  const url = `${ROOT}/favorites/${artwork_id}/${user_id}`
  const res = await destroy(url)
  const deletedFavorite = res.data ?? {}
  return deletedFavorite
}

export const updatePriorityOfOneFavoriteArtwork = async (
  artwork_id: number,
  user_id: number
) => {
  const url = `${ROOT}/favorites/priority/${artwork_id}/${user_id}`
  const res = await update(url)
  const updatePriorityFromAFavoriteArtwork = res.data ?? {}
  return updatePriorityFromAFavoriteArtwork
}


