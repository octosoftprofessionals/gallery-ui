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
  link: {
    fontSize: Theme.spacing(8),
    margin: Theme.spacing(0, 0, 0, 0),
    fontFamily: 'Bai Jamjuree',
  },
  description: {
    fontFamily: 'Bai Jamjuree',
    fontWeight: 500,
  },
}))

const CreatorInfo = ({ username, imageUrl }) => {
  const classes = useStyle()
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={classes.root}
    >
      <Link>
        <Typography>{username}</Typography>
      </Link>
      <Grid item sm={12} container direction="row">
        <Avatar className={classes.large} alt={username} src={imageUrl} />
        <div className={classes.creator}>
          <Link>
            <Typography
              variant="subtitle2"
              className={classes.link}
            >{`@${username}`}</Typography>
          </Link>
        </div>
      </Grid>
    </Grid>
  )
}
export default CreatorInfo
