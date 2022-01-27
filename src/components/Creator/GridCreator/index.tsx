import React, {useEffect, useState} from 'react'

import TabBar from '../../TabBar'
import Playlist from './../Playlist'
import Favorite from './../Favorite'
import {
  getProfileCreatedItemsByAddress,
  getProfileOwnedItemsByAddress,
} from '../../../services/gallery'
import config from '../../../config'
import axios from 'axios'

import { getPlaylists } from '../../../services/playlists'
import GalleryCreator from './GalleryCreator'
import { useQueryHash } from '../../../hooks/useQueryParams'
import { GalleryItem } from '../../../types'



const GridCreator = ({ isMyAccount = false, profileAddress }) => {

  const [creators, setCreators] = useState([])
    useEffect(() => {
  const getCreatedArtworks = async () =>  {
    await axios
      .get(
        `${config.API_URL}/gallery/gallery-items?creator_address=${profileAddress}`
      )
      .then(response => {
        let auxUser = response.data
        setCreators(auxUser)
      })

    }
    
    getCreatedArtworks()
  }, [])

  return (
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
        creators={creators}
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
          creators={[]}
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
        <Favorite
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
          profileAddress={profileAddress}
        />,
      ]}
    />
  )
}

export default GridCreator
