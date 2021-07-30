import { Exhibition, ExhibitionArtworks } from '../types'
import { get, post, update, destroy } from './http'

/* EXHIBITIONS */
export const createExhibition = async (
  queryParams = {}
): Promise<Exhibition> => {
  const url = '/exhibition'
  const res = await post(url, queryParams)
  const createdExhibition = res.data ?? {}
  return createdExhibition
}

export const getAllExhibitions = async (): Promise<Exhibition[]> => {
  const url = '/exhibition'
  const res = await get(url)
  const allExhibitions = res.data.exhibitions ?? []
  return allExhibitions
}

export const getOneExhibition = async ({
  exhibitionid,
}): Promise<Exhibition> => {
  const url = `/exhibition/${exhibitionid}`
  const res = await get(url)
  const exhibition = res.data ?? res ?? {}
  return exhibition
}

export const deleteOneExhibition = async ({
  exhibitionid,
}): Promise<Exhibition> => {
  const url = `/exhibition/${exhibitionid}`
  const res = await destroy(url)
  const deletedExhibition = res.data ?? {}
  return deletedExhibition
}

export const updateOneExhibition = async ({
  exhibitionid,
}): Promise<Exhibition> => {
  const url = `/exhibition/${exhibitionid}`
  const res = await update(url)
  const updatedExhibition = res.data ?? {}
  return updatedExhibition
}

/* EXHIBITIONSARTWORKS */

export const addArtworkToExhibition = async ({
  exhibitionid,
}): Promise<ExhibitionArtworks> => {
  const url = `/exhibition/${exhibitionid}/assets`
  const res = await post(url)
  const addedArtworkToExhibition = res.data ?? {}
  return addedArtworkToExhibition
}

export const getArtworkByExhibitionId = async ({
  exhibitionId,
}): Promise<ExhibitionArtworks[]> => {
  const url = `/exhibition/${exhibitionId}/assets`
  const res = await get(url)
  const artworkById = res.data.artworks ?? []
  return artworkById
}

export const deleteArtworkFromExhibition = async ({
  exhibitionid,
  asset_token_id,
}): Promise<ExhibitionArtworks> => {
  const url = `/exhibition/${exhibitionid}/assets/${asset_token_id}`
  const res = await destroy(url)
  const deletedArtworkFromExhibition = res.data ?? {}
  return deletedArtworkFromExhibition
}

export const updateArtworkFromExhibition = async ({
  exhibitionid,
  artworkid,
}): Promise<ExhibitionArtworks> => {
  const url = `/exhibition/${exhibitionid}/${artworkid}/assets`
  const res = await update(url)
  const updatedArtwork = res.data ?? {}
  return updatedArtwork
}
