import React from 'react'
import { useQuery } from 'react-query'

import Layout from '../../components/Layout'
import PlaylistPage from '../../components/PlaylistPage'

import { getOnePlaylistByIdWithRelatedArtworks } from '../../services/playlists'
import useQueryParams from '../../hooks/useQueryParams'
import Spinner from '../../components/Spinner'
import { getUser } from '../../services/users'
import { useAccountStore } from '../../hooks/useAccountStore'

const playListPage = () => {
  const { id } = useQueryParams()
  const [account, _] = useAccountStore()
  const { data: userAccount, isLoading: isLoadingUser } = useQuery(
    'userQuery',
    () => getUser({ public_address: account })
  )

  const {
    data: PlaylistItem = {},
    isLoading: isLoadingPlaylist,
  } = useQuery('PlaylistItem', () =>
    getOnePlaylistByIdWithRelatedArtworks({ playlist_id: Number(id) })
  )

  return (
    <Layout>
      {isLoadingPlaylist ? (
        <Spinner height="50vh" />
      ) : (
        <PlaylistPage
          relatedArtworks={PlaylistItem.relatedArtworks}
          title={PlaylistItem.queryPlaylist.title}
          description={PlaylistItem.queryPlaylist.description}
          userAccount={userAccount}
          isLoading={isLoadingUser}
          playlistId={Number(id)}
        />
      )}
    </Layout>
  )
}

export default playListPage
