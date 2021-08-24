import { get, post, update, destroy } from './http'

export const createPlaylist = async ({ user_address } : { user_address: string }) => {
  const url = `/playlist/${user_address}`
  const res = await post(url)
  const newPlaylist = res.data ?? {}
  return newPlaylist
}

export const getPlaylists = async (
  queryParams = {}
): Promise<ArrayPlaylist> => {
  const url = `/playlist?user_address=${queryParams}`
  const res = await get(url)
    const playlists = res.data ?? []
  return playlists.data
}

export const getOnePlaylistByIdWithRelatedArtworks = async ({
  playlist_id,
}: {
  playlist_id: number
}) => {
    const url = `/playlist/${playlist_id}`
    const res = await get(url)
    const playlistById = res.data ?? {}
    return playlistById
}

export const deleteOnePlaylistByIdWithAssociatedArtworks = async ({
  playlist_id,
}: {
  playlist_id
: number }) => {
    const url = `/playlist/${playlist_id}`
    const res = await destroy(url)
    const deletedPlaylist = res.data ?? {}
    return deletedPlaylist
}

export const updateOnePlaylistById = async ({
  playlist_id,
}: {
  playlist_id: number
}) => {
    const url = `/playlist/${playlist_id}`
    const res = await update(url)
    const updatedPlaylist = res.data ?? {}
    return updatedPlaylist
}

export const updateArtworksPriorities = async () => {
    const url = '/playlist'
    const res = await update(url)
    const updatedArtworkPriorities = res.data ?? {}
    return updatedArtworkPriorities
}

export const addArtworkToNewPlaylist = async () => {
  const url = '/playlist'
  const res = await post(url)
  const addedArtworkToNewPlaylist = res.data ?? {}
  return addedArtworkToNewPlaylist
}

export const addArtworkToExistingPlaylist = async ({
  playlist_id,
}: {
  playlist_id: number
}) => {
    const url = `/playlist/addArtwork/${playlist_id}`
    const res = await post(url)
    const addedArtworkToExistingPlaylist = res.data ?? {}
    return addedArtworkToExistingPlaylist
}

export const deleteArtworkFromPlaylist = async ({
  playlist_id,
  artwork_id,
}: {
  playlist_id: number
  artwork_id: number
}) => {
  const url = `/playlist/${playlist_id}/${artwork_id}/assets`
  const res = await destroy(url)
  const deletedArtwork = res.data ?? {}
  return deletedArtwork
}
