import React from 'react'

import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Typography } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  containerAvatar: { marginBottom: Theme.spacing(9) },
  username: {
    fontFamily: Theme.typography.fontFamily[2],
    paddingLeft: Theme.spacing(2),
  },
}))

const CreatorInfo = ({ username, imageUrl }) => {
  const classes = useStyle()
  return (
    <div className={classes.containerAvatar}>
      <Grid container direction="row" alignItems="center">
        <Avatar alt="avat" src={imageUrl} />
        <Typography variant="body1" className={classes.username}>
          {`@${username}`}
        </Typography>
      </Grid>
    </div>
  )
}

export default CreatorInfo
