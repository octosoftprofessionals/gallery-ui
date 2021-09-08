import React from 'react'

import { Dialog, Grid, IconButton, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Close } from '@material-ui/icons'

import {
  getProfileCreatedItemsByAddress,
  getProfileOwnedItemsByAddress,
} from '../../../../services/gallery'
import { getAllFavoritesArtworksFromOneUserByAddress } from '../../../../services/favorites'
import { GalleryItem } from '../../../../types'

import TabBar from '../../../TabBar'

import GridArtworkSelected from './GridArtworkSelected'
import GridArtworkSelectedPagination from './GridArtworkSelectedPagination'

const useStyles = makeStyles(Theme => ({
  titleModal: { textTransform: 'initial', marginLeft: Theme.spacing(16) },
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
  textBtn: { color: Theme.palette.secondary.contrastText },
  input: {
    margin: Theme.spacing(4, 0),
  },
  conteinerGrid: {
    textAlign: 'center',
    padding: Theme.spacing(6),
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
  onPlublish,
  artworksSelected,
  isDisabled = false,
  isEdit = false,
  editRelatedArtworks,
}: {
  onClose: any
  open: boolean
  onModifyPlaylist: any
  profileAddress: string
  onPlublish: any
  artworksSelected: number[]
  isDisabled: boolean
  isEdit?: boolean
  editRelatedArtworks?: GalleryItem[]
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
        <Grid
          item
          xs={10}
          container
          className={classes.conteinerGrid}
          justify="center"
        >
          <Typography
            variant="h5"
            color="primary"
            className={classes.titleModal}
          >
            Add artworks to your Playlist
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
          titles={
            isEdit
              ? ['Edit', 'Created', 'Collected', 'Favorites']
              : ['Created', 'Collected', 'Favorites']
          }
          components={
            isEdit
              ? [
                  <GridArtworkSelected
                    emptyMessageProps={{
                      primaryText: 'Nothing to see here.',
                      showExploreButton: false,
                    }}
                    queryName="Edit"
                    renderItem={editRelatedArtworks}
                    onModifyPlaylist={onModifyPlaylist}
                    artworksSelected={artworksSelected}
                  />,
                  <GridArtworkSelected
                    emptyMessageProps={{
                      primaryText: 'Nothing to see here.',
                      showExploreButton: false,
                    }}
                    queryName="CreatedItemsQuery"
                    queryFunction={async () =>
                      await getProfileCreatedItemsByAddress(profileAddress)
                    }
                    onModifyPlaylist={onModifyPlaylist}
                    artworksSelected={artworksSelected}
                  />,

                  <GridArtworkSelected
                    emptyMessageProps={{
                      primaryText: 'Your collection is empty.',
                      showExploreButton: false,
                    }}
                    queryName="OwnedItemsQuery"
                    queryFunction={async () =>
                      await getProfileOwnedItemsByAddress(profileAddress)
                    }
                    onModifyPlaylist={onModifyPlaylist}
                    artworksSelected={artworksSelected}
                  />,
                  <GridArtworkSelectedPagination
                    emptyMessageProps={{
                      primaryText: 'Your favorites is empty.',
                      showExploreButton: false,
                    }}
                    queryName="PlaylistModalQuery"
                    queryFunction={(argprofileAddress, pageParam) =>
                      getAllFavoritesArtworksFromOneUserByAddress(
                        argprofileAddress,
                        pageParam
                      )
                    }
                    profileAddress={profileAddress}
                    onModifyPlaylist={onModifyPlaylist}
                    artworksSelected={artworksSelected}
                  />,
                ]
              : [
                  <GridArtworkSelected
                    emptyMessageProps={{
                      primaryText: 'Nothing to see here.',
                      showExploreButton: false,
                    }}
                    queryName="CreatedItemsQuery"
                    queryFunction={async () =>
                      await getProfileCreatedItemsByAddress(profileAddress)
                    }
                    onModifyPlaylist={onModifyPlaylist}
                    artworksSelected={artworksSelected}
                  />,

                  <GridArtworkSelected
                    emptyMessageProps={{
                      primaryText: 'Your collection is empty.',
                      showExploreButton: false,
                    }}
                    queryName="OwnedItemsQuery"
                    queryFunction={async () =>
                      await getProfileOwnedItemsByAddress(profileAddress)
                    }
                    onModifyPlaylist={onModifyPlaylist}
                    artworksSelected={artworksSelected}
                  />,
                  <GridArtworkSelectedPagination
                    emptyMessageProps={{
                      primaryText: 'Your favorites is empty.',
                      showExploreButton: false,
                    }}
                    queryName="PlaylistModalQuery"
                    queryFunction={(argprofileAddress, pageParam) =>
                      getAllFavoritesArtworksFromOneUserByAddress(
                        argprofileAddress,
                        pageParam
                      )
                    }
                    profileAddress={profileAddress}
                    onModifyPlaylist={onModifyPlaylist}
                    artworksSelected={artworksSelected}
                  />,
                ]
          }
        />
      </Grid>
      <Grid item container justify="flex-end" className={classes.conteinerBtn}>
        <Button
          variant="text"
          disabled={isDisabled}
          className={classes.btn}
          onClick={onPlublish}
        >
          <Typography variant="caption" className={classes.textBtn}>
            Published
          </Typography>
        </Button>
      </Grid>
    </Dialog>
  )
}

export default ArtworksSelected
