import React from 'react'
import { useQuery } from 'react-query'

import Layout from '../../components/Layout'
import PlaylistPage from '../../components/PlaylistPage'

import { getOnePlaylistByIdWithRelatedArtworks } from '../../services/playlists'
import useQueryParams from '../../hooks/useQueryParams'
import Spinner from '../../components/Spinner'

const playListPage = () => {
  const { id } = useQueryParams()

  const { data: PlaylistItem = {}, isLoading } = useQuery(
    'PlaylistItem',
    () => getOnePlaylistByIdWithRelatedArtworks({ playlist_id: Number(id) }),
    {
      refetchOnWindowFocus: false,
    }
  )
  return (
    <Layout>
      {isLoading ? (
        <Spinner height="50vh" />
      ) : (
        <PlaylistPage
          relatedArtworks={PlaylistItem.relatedArtworks}
          title={PlaylistItem.queryPlaylist.title}
          description={PlaylistItem.queryPlaylist.description}
        />
      )}
    </Layout>
  )
}

export default playListPage
