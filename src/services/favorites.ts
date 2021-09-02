import config from '../config'
import { get, post, destroy, update } from './http'

const ROOT = config.API_URL || 'http://localhost:3000/v1'

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
  public_address: string,
  offset: number
) => {
  const url = `${ROOT}/favorites/${public_address}?offset=${offset}&limit=20`
  const res = await get(url)
  const userFavoritesArtworks = res.data ?? {}
  return userFavoritesArtworks
}

export const deleteOneFavoriteArtworkFromOneUser = async ({
  public_address,
  asset_id,
}: {
  public_address: string
  asset_id: number
}) => {
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

export const checkExistingFavoriteAssociation = async (
  public_address: string,
  asset_id: number
) => {
  const url = `${ROOT}/favorites/${public_address}/${asset_id}`
  const res = await get(url)
  const checkedExistingFavorite = res.data ?? {}
  return checkedExistingFavorite
}
