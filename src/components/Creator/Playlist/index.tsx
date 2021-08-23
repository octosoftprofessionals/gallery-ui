import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Button, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { colors } from '../../Styles/Colors'

import PlaylistItem from './PlaylistItem'
import ModalPlaylist from './Modal'
import ModalArtworksSelected from './Modal/ArtworksSelected'
import EmptyAccount from '../GridCreator/EmptyAccount'

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

  const handleOpenAddPlaylist = () => {
    setOpenAddPlaylist(true)
  }
  const handleCloseAddPlaylist = () => {
    setOpenAddPlaylist(false)
  }

  const handleCloseNext = () => {
    setOpenNext(false)
  }

  if (renderItem.length <= 0 && !isMyAccount) {
    return (
      <Box style={{ padding: 48 }}>
        <EmptyAccount {...emptyMessageProps} />
      </Box>
    )
  }

  return (
    <>
      <Grid container justify="center" direction="row" wrap="wrap">
        {renderItem.map((item, index) => (
          <Grid item xs={12} sm={5} container justify="center" key={index}>
            <PlaylistItem
              imageUrl={item.imageUrl}
              titlePlaylist={item.titlePlaylist}
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
      />
      <ModalArtworksSelected onClose={handleCloseNext} open={openNext} />
    </>
  )
}

export default Playlist
