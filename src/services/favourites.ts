import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'
import config from '../config'

export type FavouritesArtworks = {
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

const update = async (url, queryParams = {}) => {
  return await http.put(url, { params: queryParams })
}

export const createAssociationFavouritesArtworks = async () => {
  const url = `${ROOT}/favourites`
  const res = await post(url)
  const favouriteAssociation = res.data ?? {}
  return favouriteAssociation
}

export const getAllFavouritesArtworksFromOneUserById = async (user_id: number) => {
  const url = `${ROOT}/favourites/${user_id}`
  const res = await get(url)
  const userFavouritesArtworks = res.data ?? {}
  return userFavouritesArtworks
}


export const deleteOneFavouriteArtworkFromOneUser = async (
  artwork_id: number,
  user_id: number
) => {
  const url = `${ROOT}/favourites/${artwork_id}/${user_id}`
  const res = await destroy(url)
  const deletedFavourite = res.data ?? {}
  return deletedFavourite
}

export const updatePriorityOfOneFavoriteArtwork = async (
  artwork_id: number,
  user_id: number
) => {
  const url = `${ROOT}/favourites/priority/${artwork_id}/${user_id}`
  const res = await update(url)
  const updatePriorityFromAFavouriteArtwork = res.data ?? {}
  return updatePriorityFromAFavouriteArtwork
}


