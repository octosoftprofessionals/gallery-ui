import React, { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Button, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { colors } from '../../Styles/Colors'

import PlaylistItem from './PlaylistItem'
import ModalPlaylist from './Modal'
import ModalArtworksSelected from './Modal/ArtworksSelected'
import EmptyAccount from '../GridCreator/EmptyAccount'
import Spinner from '../../Spinner'
import {
  createPlaylist,
  addArtworkToNewPlaylist,
  deleteOnePlaylistByIdWithAssociatedArtworks,
} from '../../../services/playlists'
import { ArrayPlaylist } from '../../../types'
import { myPlaylistsId } from '../../../config/routes'

const useStyles = makeStyles(Theme => ({
  button: {
    margin: Theme.spacing(3, 9),
    backgroundColor: 'transparent',
    border: `${Theme.spacing(1)}px solid ${colors.Gray}`,
    borderRadius: Theme.shape.borderRadius[2],
    padding: `${Theme.spacing(2) / 2}vw ${Theme.spacing(2)}vw`,
    paddingBottom: `${Theme.spacing(1)}vw`,
  },
  textButton: {
    fontSize: Theme.typography.fontSize[4],
  },
  icon: { fontSize: Theme.spacing(13), color: colors.Gray },
}))

const Playlist = ({
  isMyAccount,
  emptyMessageProps,
  profileAddress,
  queryName,
  queryFunction,
}: {
  isMyAccount: boolean
  emptyMessageProps: Record<string, any>
  profileAddress: string
  queryName: string
  queryFunction: () => Promise<ArrayPlaylist>
}) => {
  const { data: playListQuery = [], isLoading } = useQuery(
    queryName,
    queryFunction
  )
  const queryClient = useQueryClient()
  const classes = useStyles()
  const [openCreatePlaylist, setOpenCreatePlaylist] = useState(false)
  const [openAddPlaylist, setOpenAddPlaylist] = useState(false)
  const [addArtworksPlaylist, setAddArtworksPlaylist] = useState([])
  const [titlePlaylist, setTitlePlaylist] = useState<string>('')
  const [descriptionPlaylist, setDescriptionPlaylist] = useState<string>('')

  const handleOpenCreatePlaylist = () => {
    setOpenCreatePlaylist(true)
    setAddArtworksPlaylist([])
    setTitlePlaylist('')
    setDescriptionPlaylist('')
  }
  const handleCloseCreatePlaylist = () => {
    setOpenCreatePlaylist(false)
  }
  const handleCloseAddPlaylist = () => {
    setOpenAddPlaylist(false)
  }

  if (playListQuery.length <= 0 && !isMyAccount) {
    return (
      <Box style={{ padding: 48 }}>
        <EmptyAccount {...emptyMessageProps} />
      </Box>
    )
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

  const handlePublishPlaylist = async () => {
    if (addArtworksPlaylist.length != 0) {
      const artworksRelated = addArtworksPlaylist.map((artworkId, index) => ({
        artwork_id: artworkId,
        priority: index + 1,
      }))

      try {
        const resCreatePlaylist = await createPlaylist(profileAddress, {
          title: titlePlaylist,
          description: descriptionPlaylist,
        })

        const { id } = resCreatePlaylist.data

        const resAddArtworkToNewPlaylist = await addArtworkToNewPlaylist({
          playlist_id: id,
          artworks_related: artworksRelated,
        })
      } catch (error) {
        console.log('errorCreatePlaylist :>> ', error)
      }
    }
    try {
      const status = queryClient.getQueryData(queryName)
      console.log('status :>> ', status)
      const result = await queryFunction()
      queryClient.setQueryData(queryName, result)
    } catch (error) {
      console.log('errorUpDate :>> ', error)
    }
    setAddArtworksPlaylist([])
    setTitlePlaylist('')
    setDescriptionPlaylist('')
    handleCloseAddPlaylist()
  }

  const handlerDeletedPlaylist = async (id: number) => {
    const state = queryClient.getQueryState(queryName)
    console.log('state :>> ', state)
    try {
      const resDeletePlaylist = await deleteOnePlaylistByIdWithAssociatedArtworks(
        {
          playlist_id: id,
        }
      )
    } catch (error) {
      console.log('errorResDeletePlaylist :>> ', error)
    }

    try {
      const status = queryClient.getQueryData(queryName)
      console.log('status :>> ', status)
      const result = await queryFunction()
      queryClient.setQueryData(queryName, result)
    } catch (error) {
      console.log('errorUpDate :>> ', error)
    }
  }

  return (
    <>
      <Grid container justify="center" direction="row" wrap="wrap">
        {isLoading ? (
          <Spinner height="50vh" />
        ) : (
          playListQuery.map(({ id, title }) => (
            <Grid item xs={12} sm={5} container justify="center" key={id}>
              <PlaylistItem
                key={id}
                imageUrl={
                  'https://f8n-ipfs-production.imgix.net/QmTf4rxGkyryv6Vnm9mFJxWTEXcqjmtgxQXz7m5cqmLFsv/nft.jpg'
                }
                titlePlaylist={title}
                link={myPlaylistsId(id)}
                id={id}
                onDelete={handlerDeletedPlaylist}
              />
            </Grid>
          ))
        )}
        <Grid item xs={12} sm={5} container>
          {isMyAccount ? (
            <Button
              className={classes.button}
              fullWidth
              onClick={handleOpenCreatePlaylist}
            >
              <Grid container alignItems="center" direction="column">
                <Add className={classes.icon} />
                <Typography variant="caption" className={classes.textButton}>
                  Create a new playlist
                </Typography>
              </Grid>
            </Button>
          ) : null}
        </Grid>
      </Grid>
      <ModalPlaylist
        onClose={handleCloseCreatePlaylist}
        open={openCreatePlaylist}
        setOpen={setOpenAddPlaylist}
        setTitle={setTitlePlaylist}
        title={titlePlaylist}
        setDescription={setDescriptionPlaylist}
        description={descriptionPlaylist}
      />
      <ModalArtworksSelected
        onClose={handleCloseAddPlaylist}
        open={openAddPlaylist}
        onModifyPlaylist={modifyPlaylist}
        profileAddress={profileAddress}
        onPlublish={handlePublishPlaylist}
        artworksSelected={addArtworksPlaylist}
        isDisabled={addArtworksPlaylist.length === 0}
      />
    </>
  )
}

export default Playlist
