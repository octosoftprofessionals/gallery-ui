import React from 'react'
import Truncate from 'react-truncate'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
/* import { artworkPathFrom } from '../../../config/routes' */
import data from './TeamCardData'

const useStyle = makeStyles(Theme => ({
  root: {
    marginTop: Theme.spacing(8),
  },
  creator: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  large: {
    marginRight: Theme.spacing(11),
  },
  userName: {
    fontSize: Theme.spacing(8),
    margin: Theme.spacing(0, 0, 0, 0),
    fontFamily: 'Bai Jamjuree',
  },
  description: {
    fontFamily: 'Bai Jamjuree',
    fontWeight: 500,
  },
}))

const CreatorInfo = ({ creatorImageUrl, creatorUsername }) => {
  const classes = useStyle()
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={classes.root}
    >
      <Typography variant="h5" color="primary">
        {creatorUsername}
      </Typography>
      <Grid item sm={12} container direction="row">
        <Avatar
          className={classes.large}
          alt={creatorUsername}
          src={creatorImageUrl}
        />
        <div className={classes.creator}>
          <Typography
            variant="subtitle2"
            className={classes.userName}
          >{`@${creatorUsername}`}</Typography>
        </div>
      </Grid>
    </Grid>
  )
}
export default CreatorInfo
