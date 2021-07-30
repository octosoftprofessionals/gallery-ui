import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'
import config from '../config'

// Types from Database Tables
export type FavoritesArtworks = {
  id: number
  user_id: number
  user_address: string
  artwork_id: number
  priority: number
}

export type Users = {
    id: number
    username: string
    profile_img_url: string
    cover_img_url: string
    public_address: string
    config: string
    email: string
    nonce: number
    bio: string
    website: string
    twitter: string
    instagram: string
    discord_id: string
    youtube: string
    facebook: string
    tiktok: string
    snapchat: string
}

export type Artworks = {
    id: number
    asset_id: number
    asset_contract_address: string
    asset_token_id: string
    title: string
    description: string
    image_url: string
    image_preview_url: string
    image_thumbnail_url: string
    image_original_url: string
    video_url: string
    creator_username: string
    creator_imageurl: string
    creator_address: string
    owner_username: string
    owner_image_url: string
    owner_address: string
    collection_slug: string
    collection_payout_address: string
    collection_name: string
    collection_image_url: string
    status: string
    price_eth: string
    price_usd: string
    minted_by_superchief: string
    is_featured: boolean
    expiration: string
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

export const createAssociationFavoritesArtworks = async (
  public_address: string,
  asset_id: number

) => {
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


