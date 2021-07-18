import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'
import { Exhibition, ExhibitionArtworks } from '../types'

const ROOT = 'http://localhost:3000/v1'

const http = axiosRateLimit(axios.create(), {
  maxRequests: 5,
  perMilliseconds: 1000,
})

const get = async (url, queryParams = {}) => {
  return await http.get(url, { params: queryParams })
}

// HELPERS
const update = async (url, queryParams = {}) => {
  return await http.put(url, { params: queryParams })
}

const post = async (url, queryParams = {}) => {
  return await http.post(url, { params: queryParams })
}

const destroy = async (url, queryParams = {}) => {
  return await http.delete(url, { params: queryParams })
}

/* EXHIBITIONS */
export const createExhibition = async (
  queryParams = {}
): Promise<Exhibition> => {
  const url = `${ROOT}/exhibition`
  const res = await post(url, queryParams)
  const createdExhibition = res.data ?? {}
  return createdExhibition
}

export const getAllExhibitions = async (): Promise<Exhibition[]> => {
  const url = `${ROOT}/exhibition`
  const res = await get(url)
  const allExhibitions = res.data.exhibitions ?? []
  return allExhibitions
}

export const getOneExhibition = async ({
  exhibitionid,
}): Promise<Exhibition> => {
  const url = `${ROOT}/exhibition/${exhibitionid}`
  const res = await get(url)
  const exhibition = res.data ?? res ?? {}
  return exhibition
}

export const deleteOneExhibition = async ({
  exhibitionid,
}): Promise<Exhibition> => {
  const url = `${ROOT}/exhibition/${exhibitionid}`
  const res = await destroy(url)
  const deletedExhibition = res.data ?? {}
  return deletedExhibition
}

export const updateOneExhibition = async ({
  exhibitionid,
}): Promise<Exhibition> => {
  const url = `${ROOT}/exhibition/${exhibitionid}`
  const res = await update(url)
  const updatedExhibition = res.data ?? {}
  return updatedExhibition
}

/* EXHIBITIONSARTWORKS */

export const addArtworkToExhibition = async ({
  exhibitionid,
}): Promise<ExhibitionArtworks> => {
  const url = `${ROOT}/exhibition/${exhibitionid}/assets`
  const res = await post(url)
  const addedArtworkToExhibition = res.data ?? {}
  return addedArtworkToExhibition
}

export const getArtworkByExhibitionId = async ({
  exhibitionId,
}): Promise<ExhibitionArtworks[]> => {
  const url = `${ROOT}/exhibition/${exhibitionId}/assets`
  const res = await get(url)
  const artworkById = res.data.artworks ?? []
  return artworkById
}

export const deleteArtworkFromExhibition = async ({
  exhibitionid,
  asset_token_id,
}): Promise<ExhibitionArtworks> => {
  const url = `${ROOT}/exhibition/${exhibitionid}/assets/${asset_token_id}`
  const res = await destroy(url)
  const deletedArtworkFromExhibition = res.data ?? {}
  return deletedArtworkFromExhibition
}

export const updateArtworkFromExhibition = async ({
  exhibitionid,
  artworkid,
}): Promise<ExhibitionArtworks> => {
  const url = `${ROOT}/exhibition/${exhibitionid}/${artworkid}/assets`
  const res = await update(url)
  const updatedArtwork = res.data ?? {}
  return updatedArtwork
}
