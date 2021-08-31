import React from 'react'
import { useQuery } from 'react-query'

import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Divider, Menu, MenuItem, Typography } from '@material-ui/core'

import Spinner from '../../../Spinner'
import { myProfilePathWithViewPlaylistOpen } from '../../../../config/routes'

import {
  addArtworkToExistingPlaylist,
  getPlaylists,
} from '../../../../services/playlists'

const useStyles = makeStyles(Theme => ({
  root: {},
  link: { textDecoration: 'none' },
}))

const MenuPlaylist = ({
  anchorEl,
  onClose,
  account,
  artworkId,
  ...props
}: {
  anchorEl: any
  onClose: any
  account: string
  artworkId: number
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
          justifyContent: 'center',
        },
      }}
    >
      {isLoading ? (
        <Spinner height="55%" />
      ) : (
        PlaylistQuery.map(({ id, title }) => (
          <>
            <MenuItem key={id} onClick={() => handleAddArtwork(id)}>
              <Typography variant="button" color="primary">
                {title}
              </Typography>
            </MenuItem>
            <Divider />
          </>
        ))
      )}
      <Link to={myProfilePathWithViewPlaylistOpen(2)} className={classes.link}>
        <MenuItem onClick={onClose}>
          <Typography variant="button" color="primary">
            New Playlist
          </Typography>
        </MenuItem>
      </Link>
    </Menu>
  )
}

export default MenuPlaylist
