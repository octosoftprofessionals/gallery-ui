import React from 'react'

import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Divider, Menu, MenuItem, Typography } from '@material-ui/core'

import { myProfilePathWithView } from '../../../../config/routes'
import { ArrayPlaylist } from '../../../../types'

import { addArtworkToExistingPlaylist } from '../../../../services/playlists'

const useStyles = makeStyles(Theme => ({
  root: {},
  link: { textDecoration: 'none' },
}))

const MenuPlaylist = ({
  anchorEl,
  onClose,
  arrayPlaylist,
  account,
  artworkId,
  ...props
}: {
  anchorEl: any
  onClose: any
  arrayPlaylist: ArrayPlaylist[]
  account: string
  artworkId: number
}) => {
  const classes = useStyles()

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
      {arrayPlaylist.map(({ id, title }) => (
        <>
          <MenuItem key={id} onClick={() => handleAddArtwork(id)}>
            <Typography variant="button" color="primary">
              {title}
            </Typography>
          </MenuItem>
          <Divider />
        </>
      ))}
      <Link to={myProfilePathWithView(account, 2)} className={classes.link}>
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
