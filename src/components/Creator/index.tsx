import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Typography, Button, IconButton } from '@material-ui/core'
import { MoreHoriz, ArrowUpward, Maximize } from '@material-ui/icons'

import GridCreator from './GridCreator'
import InfoCreator from './InfoCreator'
import { boxShadow } from '../../components/Styles/Colors'

const useStyle = makeStyles(Theme => ({
  root: { position: 'relative', paddingBottom: Theme.spacing(16) },
  containerAvatar: {
    position: 'absolute',
    top: -120,
    left: 24,
    backgroundColor: Theme.palette.secondary.main,
    padding: Theme.spacing(3),
    borderRadius: `${Theme.shape.borderRadius[3]}%`,
  },
  avatar: { width: 180, height: 180 },
  containerButtons: {
    position: 'absolute',
    top: `-${Theme.spacing(11)}px`,
    right: Theme.spacing(2),
    width: `${Theme.spacing(6)}%`,
  },
  boxIconButton: {
    backgroundColor: Theme.palette.secondary.main,
    borderRadius: `${Theme.shape.borderRadius[3]}%`,
    boxShadow: boxShadow.boxShadow1,
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: boxShadow.boxShadow4,
    },
  },
  buttonReport: {
    '&:hover': { backgroundColor: Theme.palette.secondary.main },
  },
  iconMore: {
    fontSize: Theme.typography.fontSize[11],
    fill: Theme.palette.primary.main,
  },
  icon: {
    fill: Theme.palette.primary.main,
    fontSize: Theme.typography.fontSize[10],
  },
  buttonShare: {
    padding: Theme.spacing(3, 9),
    margin: 0,
    boxShadow: boxShadow.boxShadow1,
    backgroundColor: Theme.palette.secondary.main,
    '&:hover': { backgroundColor: Theme.palette.secondary.main },
  },
  textShare: {
    marginLeft: Theme.spacing(3),
    fontSize: Theme.typography.fontSize[3],
  },
  info: {},
}))

const Creator = ({ creatorQuery }) => {
  const classes = useStyle()
  const { artwork } = creatorQuery ? creatorQuery : []

  return (
    <>
      <Grid container justify="space-around" className={classes.root}>
        <Grid item className={classes.containerAvatar}>
          <Avatar
            src={
              'https://f8n-production.imgix.net/creators/profile/c8gley51s-nyan-cat-large-gif-gif-mbf1sa.gif'
            }
            className={classes.avatar}
          />
        </Grid>

        <Grid
          item
          container
          justify="space-around"
          alignItems="center"
          className={classes.containerButtons}
        >
          <Grid item>
            <div className={classes.boxIconButton}>
              <IconButton className={classes.buttonReport}>
                <MoreHoriz className={classes.iconMore} />
              </IconButton>
            </div>
          </Grid>

          <Button variant="contained" className={classes.buttonShare}>
            <Grid container alignItems="center" direction="row">
              <Grid item xs={3} container direction="column">
                <ArrowUpward className={classes.icon} />
                <Maximize className={classes.icon} />
              </Grid>
              <Grid item xs={3}>
                <Typography
                  variant="caption"
                  color="primary"
                  className={classes.textShare}
                >
                  Share
                </Typography>
              </Grid>
            </Grid>
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-around"
        direction="row"
        className={classes.info}
      >
        <Grid item xs={12} sm={4}>
          <InfoCreator />
        </Grid>
        <Grid item xs={12} sm={7}>
          <GridCreator />
        </Grid>
      </Grid>
    </>
  )
}

export default Creator
