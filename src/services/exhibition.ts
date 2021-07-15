import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'
import config from '../config'

export type Exhibition = {
    id: Number
    title: String
    description: String
    artist: String
    priority: Number
    deliverydate: Date
}

export type ExhibitionArtworks = {
    id: Number
    name: String
    artist_wallet_address: String
    asset_contract_address: String
    asset_token_id: String
    priority: Number
    exhibitionid: Number
}


const ROOT =  'http://localhost:3000/v1'

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
export const createExhibition = async ( queryParams = {} ) => {
  const url = `${ROOT}/exhibition`
  const res = await post(url, queryParams)
  const createdExhibition = res.data ?? {}
  return createdExhibition
}

export const getAllExhibitions = async () => {
  const url = `${ROOT}/exhibition`
  const res = await get(url)
  const allExhibitions = res.data ?? []
  return allExhibitions
}

export const getOneExhibition = async ({ exhibitionid }) => {
    const url = `${ROOT}/exhibition/${exhibitionid}`
    const res = await get(url)
    const exhibition = res.data ?? res ?? {}
    return exhibition
}

export const deleteOneExhibition = async ({ exhibitionid }) => {
    const url = `${ROOT}/exhibition/${exhibitionid}`
    const res = await destroy(url)
    const deletedExhibition = res.data ?? {}
}

export const updateOneExhibition = async ({ exhibitionid }) => {
  const url = `${ROOT}/exhibition/${exhibitionid}`
  const res = await update(url)
  const updatedExhibition = res.data ?? {}
}

/* EXHIBITIONSARTWORKS */

export const addArtworkToExhibition = async ({ exhibitionid }) => {
  const url = `${ROOT}/exhibition/${exhibitionid}/assets`
  const res = await post(url)
  const addedArtworkToExhibition = res.data ?? {}
  return addedArtworkToExhibition
}

export const getArtworkByExhibitionId = async ({ exhibitionId }) => {
  const url = `${ROOT}/exhibition/${exhibitionId}/assets`
  const res = await get(url)
  const artworkById = res.data ?? {}
  return artworkById
}

export const deleteArtworkFromExhibition = async ({ exhibitionid, asset_token_id }) => {
  const url = `${ROOT}/exhibition/${exhibitionid}/assets/${asset_token_id}`
  const res = await destroy(url)
  const deletedArtworkFromExhibition = res.data ?? {}
  return deleteArtworkFromExhibition
}

export const updateArtworkFromExhibition = async ({ exhibitionid, artworkid }) => {
  const url = `${ROOT}/exhibition/${exhibitionid}/${artworkid}/assets`
  const res = await update(url)
  const updatedArtwork = res.data ?? {}
  return updatedArtwork
}
