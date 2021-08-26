import React, { useState } from 'react'
import { useQuery } from 'react-query'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Button, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { colors } from '../../Styles/Colors'

import PlaylistItem from './PlaylistItem'
import ModalPlaylist from './Modal'
import ModalArtworksSelected from './Modal/ArtworksSelected'
import EmptyAccount from '../GridCreator/EmptyAccount'
import Spinner from '../../Spinner'
import { createPlaylist } from '../../../services/playlists'
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
  queryFunction: () => Promise<ArrayPlaylist[]>
}) => {
  const { data: playListQuery = [], isLoading } = useQuery(
    queryName,
    queryFunction
  )

  const classes = useStyles()
  const [openNext, setOpenNext] = useState(true)
  const [openAddPlaylist, setOpenAddPlaylist] = useState(false)
  const [newPlaylistId, setNewPlaylistId] = useState('')

  let arrPlaylist = []

  const handleOpenAddPlaylist = () => {
    setOpenAddPlaylist(true)
  }
  const handleCloseAddPlaylist = () => {
    setOpenAddPlaylist(false)
  }

  const handleCloseNext = () => {
    setOpenNext(false)
  }

  const handleCreatePlaylist = async (
    titlePlaylist: string,
    descriptionPlaylist: string
  ) => {
    const res = await createPlaylist(profileAddress, {
      title: titlePlaylist,
      description: descriptionPlaylist,
    })
  }

  if (playListQuery.length <= 0 && !isMyAccount) {
    return (
      <Box style={{ padding: 48 }}>
        <EmptyAccount {...emptyMessageProps} />
      </Box>
    )
  }

  const modifyPlaylist = addIdArtwork => {
    if (arrPlaylist.includes(addIdArtwork)) {
      arrPlaylist.splice(arrPlaylist.indexOf(addIdArtwork), 1)
      return arrPlaylist
    } else {
      arrPlaylist.push(addIdArtwork)
      return arrPlaylist
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
              />
            </Grid>
          ))
        )}
        <Grid item xs={12} sm={5} container>
          {isMyAccount ? (
            <Button
              className={classes.button}
              fullWidth
              onClick={handleOpenAddPlaylist}
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
        onClose={handleCloseAddPlaylist}
        open={openAddPlaylist}
        setOpen={setOpenNext}
        handlePlaylist={handleCreatePlaylist}
      />
      <ModalArtworksSelected
        onClose={handleCloseNext}
        open={openNext}
        onModifyPlaylist={modifyPlaylist}
        profileAddress={profileAddress}
      />
    </>
  )
}

export default Playlist
