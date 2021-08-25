import React from 'react'

import { Dialog, Grid, IconButton, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Close } from '@material-ui/icons'

import ItemArtworkSelected from './ItemArtworkSelected'
import TabBar from '../../../TabBar'

import {
  getProfileCreatedItemsByAddress,
  getProfileOwnedItemsByAddress,
} from '../../../../services/gallery'
import { getPlaylists } from '../../../../services/playlists'

const useStyles = makeStyles(Theme => ({
  titleModal: { textTransform: 'initial' },
  icon: {
    fontSize: Theme.spacing(10),
    color: Theme.palette.primary.main,
    '@media (max-width: 576px)': {
      fontSize: Theme.spacing(10),
    },
  },
  btn: {
    backgroundColor: Theme.palette.primary.dark,
    padding: Theme.spacing(2, 9),
    borderRadius: Theme.shape.borderRadius[1],
  },
  textBtn: { color: Theme.palette.secondary.light },
  input: {
    margin: Theme.spacing(4, 0),
  },
  conteinerBtn: {
    padding: Theme.spacing(10),
    '& .MuiOutlinedInput': {
      root: { borderRadius: 10 },
    },
  },
  conteinerCard: { padding: Theme.spacing(6) },
}))

const ArtworksSelected = ({
  onClose,
  open,
  onModifyPlaylist,
  profileAddress,
}: {
  onClose: Funtion
  open: boolean
  onModifyPlaylist: Funtion
  profileAddress
}) => {
  const classes = useStyles()

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      onClose={handleClose}
      open={open}
      aria-labelledby="simple-dialog-title"
    >
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={10} container justify="center">
          <Typography
            variant="h5"
            color="primary"
            className={classes.titleModal}
          >
            Create a new playlist
          </Typography>
        </Grid>
        <IconButton onClick={handleClose}>
          <Close className={classes.icon} />
        </IconButton>
      </Grid>
      <Grid item xs={12} container justify="space-around">
        <TabBar
          justify="center"
          sm={9}
          fullWidth
          light
          playlist
          inSize={3}
          titles={['Created', 'Collected', 'Favorites']}
          components={[
            <ItemArtworkSelected
              emptyMessageProps={{
                primaryText: 'Nothing to see here.',
                showExploreButton: false,
              }}
              queryName="CreatedItemsQuery"
              queryFunction={async () =>
                await getProfileCreatedItemsByAddress(profileAddress)
              }
              onModifyPlaylist={e => onModifyPlaylist(e)}
            />,

            <ItemArtworkSelected
              emptyMessageProps={{
                primaryText: 'Your collection is empty.',
                showExploreButton: false,
              }}
              queryName="OwnedItemsQuery"
              queryFunction={async () =>
                await getProfileOwnedItemsByAddress(profileAddress)
              }
              onModifyPlaylist={e => onModifyPlaylist(e)}
            />,
            <ItemArtworkSelected
              emptyMessageProps={{
                primaryText: 'Your collection is empty.',
                showExploreButton: false,
              }}
              queryName="PlaylistQuery"
              queryFunction={async () => await getPlaylists(profileAddress)}
              onModifyPlaylist={e => onModifyPlaylist(e)}
            />,
          ]}
        />
      </Grid>
      <Grid item container justify="flex-end" className={classes.conteinerBtn}>
        <Button variant="text" className={classes.btn} onClick={onClose}>
          <Typography variant="caption" className={classes.textBtn}>
            Published
          </Typography>
        </Button>
      </Grid>
    </Dialog>
  )
}

export default ArtworksSelected
