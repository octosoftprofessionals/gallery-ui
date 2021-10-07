import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

import Spinner from '../Spinner'
import CarouselPL from './CarouselPL'

import ArtworkInformation from './ArtworkInformation'
import CreatorInfo from '../GalleryItem/ArtworkItem/CreatorInfo'
import ModalEditPlaylist from '../Creator/Playlist/Modal'
import ModalEditArtworksSelected from '../Creator/Playlist/Modal/ArtworksSelected'

import {
  updateArtworksPriorities,
  updateOnePlaylistById,
} from '../../services/playlists'

import { Users, GalleryItem } from '../../types'
import { truncateMiddleText } from '../../Utils/stringUtils'

const useStyles = makeStyles(Theme => ({
  containerDescription: {
    padding: Theme.spacing(9),
    marginTop: Theme.spacing(9),
    backgroundColor: Theme.palette.background.paper,
    '&:hover': {
      borderShadow: 'none',
      transform: 'none',
      translate: 'none',
      border: 'none',
    },
  },
  icon: {
    fontSize: Theme.spacing(11),
    color: Theme.palette.primary.contrastText,
    '&:hover': {
      color: Theme.palette.primary.main,
    },
  },
  user: {
    paddingLeft: Theme.spacing(12),
    '@media (max-width: 576px)': { paddingLeft: 0 },
  },
  descContainer: {
    paddingLeft: Theme.spacing(12),
    '@media (max-width: 576px)': {
      paddingLeft: 0,
      paddingBottom: Theme.spacing(12),
    },
  },
  mainContainer: { paddingTop: Theme.spacing(12) },
  editButton: {
    fontSize: Theme.typography.fontSize[3],
    borderRadius: Theme.spacing(7),
    textTransform: 'none',
    backgroundColor: Theme.palette.buttons.selected,
    '@media (max-width: 576px)': {
      margin: Theme.spacing(3, 0),
      padding: Theme.spacing(3),
    },
  },
  textBtn: {
    color: Theme.palette.primary.contrastText,
  },
}))

const index = ({
  userAccount,
  relatedArtworks,
  title,
  description,
  isLoading,
  playlistId,
  onUpDate,
}: {
  userAccount: Users
  relatedArtworks: GalleryItem[]
  title: string
  description: string
  isLoading: any
  playlistId: number
  onUpDate: Function<any>
}) => {
  const classes = useStyles()
  const { username, profileImgUrl, publicAddress } = userAccount ?? {}

  const [imgIndex, setImgIndex] = useState<number>(0)
  const [openEditPlaylist, setOpenEditPlaylist] = useState<boolean>(false)
  const [openEditArtworksSelected, setOpenEditArtworksSelected] =
    useState<boolean>(false)
  const [addArtworksPlaylist, setAddArtworksPlaylist] = useState<number[]>([])
  const [editRelatedArtworks, setEditRelatedArtworks] = useState<GalleryItem[]>(
    []
  )
  const [titlePlaylist, setTitlePlaylist] = useState<string>(title)
  const [descriptionPlaylist, setDescriptionPlaylist] =
    useState<string>(description)

  const getArtworksId = () => {
    const artworksRelated = relatedArtworks.map(({ id }) => id)
    setAddArtworksPlaylist(artworksRelated)
    setEditRelatedArtworks(relatedArtworks)
  }

  const handleOpenEditPlaylist = () => {
    getArtworksId()
    setOpenEditPlaylist(true)
  }
  const handleCloseEditPlaylist = () => {
    setOpenEditPlaylist(false)
  }
  const handleCloseEditArtworksSelected = () => {
    setOpenEditArtworksSelected(false)
  }

  const modifyPlaylist = (addIdArtwork: number) => {
    if (addArtworksPlaylist.includes(addIdArtwork)) {
      const index = addArtworksPlaylist.indexOf(addIdArtwork)
      const aux = addArtworksPlaylist
        .slice(0, index)
        .concat(addArtworksPlaylist.slice(index + 1))
      return setAddArtworksPlaylist(aux)
    } else {
      return setAddArtworksPlaylist([...addArtworksPlaylist, addIdArtwork])
    }
  }

  const handleEditPlaylist = async () => {
    if (addArtworksPlaylist.length != 0) {
      const artworksRelated = addArtworksPlaylist.map((artworkId, index) => ({
        artwork_id: artworkId,
        priority: index + 1,
      }))

      const resupdateOnePlaylistById = await updateOnePlaylistById(playlistId, {
        title: titlePlaylist,
        description: descriptionPlaylist,
      })
      const resUpdateArtworksPriorities = await updateArtworksPriorities({
        playlist_id: playlistId,
        artworks_related: artworksRelated,
      })
    } else {
      const resupdateOnePlaylistById = await updateOnePlaylistById(playlistId, {
        title: titlePlaylist,
        description: descriptionPlaylist,
      })
      const resUpdateArtworksPriorities = await updateArtworksPriorities({
        playlist_id: playlistId,
        artworks_related: [],
      })
    }
    onUpDate()
    handleCloseEditArtworksSelected()
  }

  return (
    <>
      {isLoading.Playlist ? (
        <Spinner height="50vh" />
      ) : (
        <Grid item xs={12} container alignItems="center" justify="center">
          <CarouselPL
            artworks={relatedArtworks}
            xs={4}
            setIndex={setImgIndex}
            emptyMessageProps={{
              primaryText: 'Nothing to see here.',
            }}
          />
          <Grid
            item
            xs={12}
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid container item xs={12} md={9} justify="space-between">
              <Grid item xs={5} container direction="column">
                <Typography variant="h4" color="primary">
                  {title}
                </Typography>
                {isLoading.User ? (
                  <Spinner height="15hv" />
                ) : (
                  <Grid className={classes.user}>
                    <CreatorInfo
                      username={
                        username
                          ? username
                          : truncateMiddleText(publicAddress, 8)
                      }
                      imageUrl={profileImgUrl}
                    />
                  </Grid>
                )}
              </Grid>
              <Grid
                item
                container
                justify="flex-end"
                alignContent="flex-start"
                xs={12}
                md={5}
              >
                <Button
                  variant="outlined"
                  className={classes.editButton}
                  onClick={handleOpenEditPlaylist}
                >
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <EditIcon className={classes.icon} />
                    <Typography variant="button" className={classes.textBtn}>
                      Edit your playlist
                    </Typography>
                  </Grid>
                </Button>
              </Grid>
            </Grid>
            <Grid
              className={classes.mainContainer}
              item
              xs={12}
              md={9}
              container
              justify="space-between"
              direction="row"
            >
              <Grid item xs={12} md={5} className={classes.descContainer}>
                <Typography variant="h5" color="primary">
                  Description
                </Typography>
                <Paper className={classes.containerDescription}>
                  <Typography variant="body2" color="primary">
                    {description}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={5}>
                <Typography color="primary" variant="h5">
                  Artwork Information
                </Typography>
                {isLoading.Playlist ? (
                  <Spinner height="50vh" />
                ) : (
                  <ArtworkInformation
                    arryArtwork={relatedArtworks}
                    index={imgIndex}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
      <ModalEditPlaylist
        onClose={handleCloseEditPlaylist}
        open={openEditPlaylist}
        setOpen={setOpenEditArtworksSelected}
        setTitle={setTitlePlaylist}
        title={titlePlaylist}
        setDescription={setDescriptionPlaylist}
        description={descriptionPlaylist}
      />
      <ModalEditArtworksSelected
        onClose={handleCloseEditArtworksSelected}
        open={openEditArtworksSelected}
        onModifyPlaylist={modifyPlaylist}
        profileAddress={publicAddress}
        onPlublish={handleEditPlaylist}
        editRelatedArtworks={editRelatedArtworks}
        artworksSelected={addArtworksPlaylist}
        isEdit={true}
      />
    </>
  )
}

export default index
