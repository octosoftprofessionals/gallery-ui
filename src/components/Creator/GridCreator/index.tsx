import React from 'react'

import TabBar from '../../TabBar'
import Playlist from './../Playlist'
import {
  getProfileCreatedItemsByAddress,
  getProfileOwnedItemsByAddress,
} from '../../../services/gallery'

import { getAllFavoritesArtworksFromOneUserByAddress } from '../../../services/favorites'
import { getPlaylists } from '../../../services/playlists'
import GalleryCreator from './GalleryCreator'
import { useQueryHash } from '../../../hooks/useQueryParams'

const GridCreator = ({ isMyAccount = false, profileAddress }) => (
  <TabBar
    justify="center"
    sm={9}
    fullWidth
    light
    playlist
    inSize={3}
    initialTab={parseInt(useQueryHash() || '0')}
    isMyAccount={isMyAccount}
    titles={['Created', 'Collected', 'Playlist', 'Favorites']}
    components={[
      <GalleryCreator
        emptyMessageProps={{
          primaryText: isMyAccount
            ? 'No creations. Go get busy! 🧑‍🎨'
            : 'Nothing to see here.',
          showExploreButton: true,
        }}
        queryName="CreatedItemsQuery"
        queryFunction={async () =>
          await getProfileCreatedItemsByAddress(profileAddress)
        }
      />,
      <GalleryCreator
        emptyMessageProps={{
          primaryText: isMyAccount
            ? 'Your collection is empty.'
            : 'Nothing to see here.',
          secondaryText: isMyAccount
            ? 'Start building your collection by placing bids on artwork.'
            : null,
          showExploreButton: true,
        }}
        queryName="OwnedItemsQuery"
        queryFunction={async () =>
          await getProfileOwnedItemsByAddress(profileAddress)
        }
      />,
      <Playlist
        isMyAccount={isMyAccount}
        profileAddress={profileAddress}
        emptyMessageProps={{
          primaryText: isMyAccount
            ? 'Your playlist are empty.'
            : 'Nothing to see here.',
          secondaryText: isMyAccount
            ? 'Start building your collection by placing bids on artwork.'
            : null,
          showExploreButton: true,
        }}
        queryName="PlaylistQuery"
        queryFunction={async () => await getPlaylists(profileAddress)}
      />,
      <GalleryCreator
        emptyMessageProps={{
          primaryText: isMyAccount
            ? 'Your favorites are empty.'
            : 'Nothing to see here.',
          secondaryText: isMyAccount
            ? 'Start building your collection by placing bids on artwork.'
            : null,
          showExploreButton: true,
        }}
        queryName="FavoriteItemsQuery"
        queryFunction={async () =>
          await getAllFavoritesArtworksFromOneUserByAddress(profileAddress)
        }
      />,
    ]}
  />
)

export default GridCreator
