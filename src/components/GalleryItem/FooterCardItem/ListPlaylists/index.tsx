import React from 'react'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Divider, Menu, MenuItem, Typography } from '@material-ui/core'
import PlaylistModal from '../../../Creator/Playlist/Modal'
import Spinner from '../../../Spinner'
import { myProfilePathWithViewPlaylistOpen } from '../../../../config/routes'

import {
  addArtworkToExistingPlaylist,
  addArtworkToNewPlaylist,
  getPlaylists,
} from '../../../../services/playlists'
import { truncateString } from '../../../../Utils/stringUtils'

const useStyles = makeStyles(Theme => ({
  root: {},
  link: { textDecoration: 'none' },
  playlistItem: { fontSize: 14, display: 'flex' },
}))

const MenuPlaylist = ({
  anchorEl,
  onClose,
  account,
  artworkId,
  handleOpenCreatePlaylist,
  openCreatePlaylist,
  ...props
}: {
  anchorEl: any
  onClose: any
  account: string
  artworkId: number
  handleOpenCreatePlaylist: any
  openCreatePlaylist: boolean
}) => {
  const classes = useStyles()

  const { data: PlaylistQuery = [], isLoading } = useQuery(
    'PlaylistQuery',
    () => getPlaylists(account),
    {
      refetchOnWindowFocus: false,
    }
  )

  const handleAddArtwork = async (id: number) => {
    const res = await addArtworkToExistingPlaylist(id, {
      artwork_id: artworkId,
    })
    onClose()
  }

  const [showModal, setShowModal] = useState(true)
  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <Menu
      id="simple-menu"
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
      PaperProps={{
        style: {
          maxHeight: '30vh',
          width: '20ch',
          display: 'flex',
          justifyContent: 'flex-start',
        },
      }}
    >
      {isLoading ? (
        <Spinner height="55%" />
      ) : (
        PlaylistQuery.map(({ id, title }) => (
          <>
            <MenuItem key={id} onClick={() => handleAddArtwork(id)}>
              <Typography color="primary" className={classes.playlistItem}>
                {title.length < 30 ? title : truncateString(title, 25)}
              </Typography>
            </MenuItem>
            <Divider />
          </>
        ))
      )}
      <div className={classes.link}>
        <MenuItem onClick={handleModal}>
          <Typography
            variant="button"
            color="primary"
            className={classes.playlistItem}
            onClick={handleOpenCreatePlaylist}
          >
            New Playlist
          </Typography>
        </MenuItem>
      </div>
      {showModal ? <PlaylistModal onClose={handleModal} /> : null}
    </Menu>
  )
}

export default MenuPlaylist
