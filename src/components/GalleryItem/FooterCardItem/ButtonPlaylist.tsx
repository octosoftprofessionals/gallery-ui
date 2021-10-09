import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography, Hidden } from '@material-ui/core'
import {
  StarBorderRounded,
  SlideshowOutlined,
  GradeSharp,
  SlideshowTwoTone,
} from '@material-ui/icons/'
import MenuListPlaylists from './ListPlaylists'
import useQueryParams from '../../../hooks/useQueryParams'
import { checkExistingFavoriteAssociation } from '../../../services/favorites'

const useStyle = makeStyles(Theme => ({
  root: { padding: Theme.spacing(0, 6) },
  icon: {
    fontSize: Theme.spacing(12),
    fill: Theme.palette.primary.light,
  },
  button: { padding: 0, margin: 0 },
}))

const ButtonPlaylist = ({
  handleSubmitFavorite,
  handleSubmitUnFavorite,
  inFavorite,
  inPlaylist,
  account,
  artworkId,
  assetId,
}: {
  handleSubmitFavorite: Function
  handleSubmitUnFavorite: Function
  inFavorite?: boolean
  inPlaylist?: boolean
  account: string
  artworkId: number
}) => {
  const classes = useStyle()
  const [anchorEl, setAnchorEl] = useState(null)

  // const { address } = useQueryParams()
  const checkFavorites = async () => {
    const response = await checkExistingFavoriteAssociation(account, assetId)
    return response
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  // console.log(
  //   `account :>`,
  //   account,
  //   'artworkId :>',
  //   artworkId,
  //   'assetId',
  //   assetId
  // )
  // console.log(`From ButtonPlaylist props :>`, props)
  // console.log(`address from buttonPlaylist :>`, address)

  const print = async () => {
    const res = await checkFavorites()
    const response = res.favorite ?? {}
    console.log(`checkFavorites() :>`, response)
    return await response
  }

  // const check = async () => {

  // }

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={classes.root}
    >
      <Button
        className={classes.button}
        onClick={inFavorite ? handleSubmitUnFavorite : handleSubmitFavorite}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Hidden only="xs">
            <Typography variant="overline" color="textSecondary">
              {print() ? 'Remove Favorites' : 'Add to Favorites'}
            </Typography>
          </Hidden>
          {print() ? (
            <GradeSharp className={classes.icon} />
          ) : (
            <StarBorderRounded className={classes.icon} />
          )}
        </Grid>
      </Button>

      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        className={classes.button}
        onClick={handleClick}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Hidden only="xs">
            <Typography variant="overline" color="textSecondary">
              Add to Playlist
            </Typography>
          </Hidden>
          {inPlaylist ? (
            <SlideshowTwoTone className={classes.icon} />
          ) : (
            <SlideshowOutlined className={classes.icon} />
          )}
        </Grid>
      </Button>
      <MenuListPlaylists
        anchorEl={anchorEl}
        onClose={handleClose}
        account={account}
        artworkId={artworkId}
      />
    </Grid>
  )
}

export default ButtonPlaylist
