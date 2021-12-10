import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Typography } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  containerAvatar: {
    padding: Theme.spacing(2, 0),
  },
  username: {
    fontFamily: Theme.typography.fontFamily[2],
    paddingLeft: Theme.spacing(2),
  },
  avatar: {
    '@media (max-width: 576px)': {
      height: Theme.spacing(12),
      width: Theme.spacing(12),
    },
  },
  boxAvatar: {
    minHeight: Theme.spacing(13),
  },
}))

const CreatorInfo = ({
  username,
  imageUrl,
}: {
  username: string
  imageUrl?: string
}) => {
  const classes = useStyle()
  return (
    <div className={classes.containerAvatar}>
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.boxAvatar}
      >
        {username && (
          <>
            <Avatar alt="avat" src={imageUrl} className={classes.avatar} />
            <Typography
              variant="body1"
              color="primary"
              className={classes.username}
            >
              {`@${username}`}
            </Typography>
          </>
        )}
      </Grid>
    </div>
  )
}

export default CreatorInfo
