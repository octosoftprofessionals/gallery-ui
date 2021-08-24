import React, { useState } from 'react'
import { useMutation } from 'react-query'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Button, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { colors } from '../../Styles/Colors'

import PlaylistItem from './PlaylistItem'
import ModalPlaylist from './Modal'
import ModalArtworksSelected from './Modal/ArtworksSelected'
import EmptyAccount from '../GridCreator/EmptyAccount'
import { createPlaylist } from '../../../services/playlists'

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
  renderItem,
  emptyMessageProps,
}: {
  isMyAccount: boolean
  renderItem: any[]
  emptyMessageProps: Record<string, any>
}) => {
  const classes = useStyles()
  const [openNext, setOpenNext] = useState(false)
  const [openAddPlaylist, setOpenAddPlaylist] = useState(false)
  const [newPlaylistId, setNewPlaylistId] = useState('')
  const createPlaylistMutation = useMutation(createPlaylist)
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
    // createPlaylistMutation.mutate({ titlePlaylist, descriptionPlaylist })
    // const { id: PlaylistId } = createPlaylistMutation.data
    // setNewPlaylistId(PlaylistId)
    console.log(
      'next_Click :>> ',
      titlePlaylist,
      descriptionPlaylist,
      arrPlaylist
    )
  }

  if (renderItem.length <= 0 && !isMyAccount) {
    return (
      <Box style={{ padding: 48 }}>
        <EmptyAccount {...emptyMessageProps} />
      </Box>
    )
  }

  const imgUrls = [
    'https://f8n-ipfs-production.imgix.net/Qme7ShWfH2GHnbKHo9Vb41PxMwLunLxgKGebF94RzjGhCs/nft.png',
    'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
    'https://f8n-ipfs-production.imgix.net/QmTf4rxGkyryv6Vnm9mFJxWTEXcqjmtgxQXz7m5cqmLFsv/nft.jpg',
    'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
    'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
    'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg',
  ]
  const randImgUrl = () => {
    return imgUrls[Math.floor(Math.random() * imgUrls.length)]
  }
  const randIDs = () => {
    return 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }
  function fillartworkCardAddPlayList(size) {
    const artworkCardAddPlayList = []
    for (let i = 0; i < size; i++) {
      artworkCardAddPlayList.push({
        id: `${randIDs()}`,
        ImageUrl: randImgUrl(),
        videoUrl: null,
        inPlaylist: false,
        assetTokenId: `${i}`,
      })
    }
    return artworkCardAddPlayList
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

  const Items = fillartworkCardAddPlayList(7)
  return (
    <>
      <Grid container justify="center" direction="row" wrap="wrap">
        {renderItem.map((item, index) => (
          <Grid item xs={12} sm={5} container justify="center" key={index}>
            <PlaylistItem
              imageUrl={item.imageUrl}
              titlePlaylist={item.titlePlaylist}
              link
            />
          </Grid>
        ))}
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
        Items={Items}
      />
    </>
  )
}

export default Playlist
