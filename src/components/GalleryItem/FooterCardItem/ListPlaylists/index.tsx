import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Grid, Menu, MenuItem } from '@material-ui/core'

const useStyles = makeStyles(Theme => ({
  root: {},
}))

const MenuPlaylist = ({ anchorEl, onClose, arrayPlaylist, ...props }) => {
  const classes = useStyles()
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
      {arrayPlaylist.map(item => (
        <Grid item>
          <MenuItem onClick={onClose}>{item}</MenuItem>
          <Divider />
        </Grid>
      ))}
      <Grid item>
        <MenuItem onClick={onClose}>New Playlist</MenuItem>
      </Grid>
    </Menu>
  )
}

export default MenuPlaylist
