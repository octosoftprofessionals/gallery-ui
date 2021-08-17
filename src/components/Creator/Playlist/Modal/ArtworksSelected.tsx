import React, { useState } from 'react'
import { Dialog, Grid, IconButton, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Close } from '@material-ui/icons'

import ItemArtworkSelected from './ItemArtworkSelected'

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
      inPlaylist: false,
    })
  }
  return artworkCardAddPlayList
}
const ArtworksSelected = ({ onClose, open }) => {
  const [title, setTitle] = useState('')
  const classes = useStyles()

  const handleClose = () => {
    onClose()
  }

  const Items = fillartworkCardAddPlayList(7)
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
            Creat a new playlist
          </Typography>
        </Grid>
        <IconButton onClick={handleClose}>
          <Close className={classes.icon} />
        </IconButton>
      </Grid>
      <Grid item xs={12} container justify="space-around">
        {Items.map(({ ImageUrl, inPlaylist, id }) => (
          <Grid item xs={12} sm={3} md={4} className={classes.conteinerCard}>
            <ItemArtworkSelected
              key={id}
              imageUrl={ImageUrl}
              videoUrl={null}
              onCheck={inPlaylist}
            />
          </Grid>
        ))}
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
