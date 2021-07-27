import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Button, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { colors } from '../../Styles/Colors'

import PlaylistItem from './PlaylistItem'
import ModalPlaylist from './Modal'
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
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  if (renderItem.length === 0) {
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
            <Button className={classes.button} fullWidth onClick={handleOpen}>
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
      <ModalPlaylist onClose={handleClose} open={open} setOpen={setOpen} />
    </>
  )
}

export default Playlist
