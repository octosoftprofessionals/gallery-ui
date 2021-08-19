import React from 'react'

import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Divider, Menu, MenuItem, Typography } from '@material-ui/core'

import { myProfilePathWithView } from '../../../../config/routes'

const useStyles = makeStyles(Theme => ({
  root: {},
  link: { textDecoration: 'none' },
}))

const MenuPlaylist = ({
  anchorEl,
  onClose,
  arrayPlaylist,
  account,
  ...props
}) => {
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
        <>
          <MenuItem onClick={onClose}>{item}</MenuItem>
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
