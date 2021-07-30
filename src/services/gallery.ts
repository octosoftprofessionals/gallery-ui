import { GalleryItem, CreatorProps } from '../types'
import { get } from './http'

export const featuredItemsQuery = async (queryParams = {}) => {
  const url = '/gallery/featured-items'
  const res = await get(url, queryParams)
  return res.data ?? []
}

export const featuredInfinitItemsQuery = async ({
  offset,
}: {
  offset: number
}) => {
  const url = `/gallery/featured-items?offset=${offset}&limit=20`
  const res = await get(url)
  return res.data ?? []
}

export const galleryItemQuery = async (
  assetContractAddress: string,
  assetTokenId: number
): Promise<GalleryItem> => {
  const url = `/gallery/gallery-item/${assetContractAddress}/${assetTokenId}`
  const res = await get(url)
  return res.data ?? {}
}

export const getProfileAccountByAddress = async (
  address: string
): Promise<CreatorProps> => {
  const url = `/gallery/profile/${address}/account`
  const res = await get(url)
  return res.data ?? {}
}

export const getProfileCreatedItemsByAddress = async (
  address: string
): Promise<GalleryItem[]> => {
  const url = `/gallery/profile/${address}/created-items`
  const res = await get(url)
  return res.data ?? []
}

export const getProfileOwnedItemsByAddress = async (
  address: string
): Promise<GalleryItem[]> => {
  const url = `/gallery/profile/${address}/owned-items`
  const res = await get(url)
  return res.data ?? []
}
