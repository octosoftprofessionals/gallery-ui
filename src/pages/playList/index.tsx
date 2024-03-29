import React from 'react'
import { useQuery, useQueryClient } from 'react-query'

import Layout from '../../components/Layout'
import PlaylistPage from '../../components/PlaylistPage'

import { getOnePlaylistByIdWithRelatedArtworks } from '../../services/playlists'
import useQueryParams from '../../hooks/useQueryParams'
import Spinner from '../../components/Spinner'
import { getUser } from '../../services/users'
import { useAccountStore } from '../../hooks/useAccountStore'

const playListPage = () => {
  const { id } = useQueryParams()
  const { account } = useAccountStore()
  const queryClient = useQueryClient()
  const { data: userAccount, isLoading: isLoadingUser } = useQuery(
    'userQuery',
    () => getUser({ public_address: account.toLowerCase() }),
    {
      refetchOnWindowFocus: false,
    }
  )

  const { data: PlaylistItem = {}, isLoading: isLoadingPlaylist } = useQuery(
    'PlaylistItem',
    () => getOnePlaylistByIdWithRelatedArtworks({ playlist_id: Number(id) })
  )

  console.log(`PlaylistItem :>`, PlaylistItem)

  const upDate = async (): Promise<any> => {
    const result = await getOnePlaylistByIdWithRelatedArtworks({
      playlist_id: Number(id),
    })
    queryClient.setQueryData('PlaylistItem', result)
  }

  return (
    <Layout>
      {isLoadingPlaylist || isLoadingUser ? (
        <Spinner height="50vh" />
      ) : (
        <PlaylistPage
          relatedArtworks={PlaylistItem.relatedArtworks}
          title={PlaylistItem.queryPlaylist.title}
          description={PlaylistItem.queryPlaylist.description}
          userAccount={userAccount}
          playlistCreatorAccount={PlaylistItem.queryPlaylist.userAddress}
          isLoading={{ Playlist: isLoadingPlaylist, User: isLoadingUser }}
          playlistId={Number(id)}
          onUpDate={upDate}
        />
      )}
    </Layout>
  )
}

export default playListPage
