import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
  Tooltip,
  Paper,
} from '@material-ui/core'

const useStyles = makeStyles(Theme => ({
  avatar: {
    marginRight: Theme.spacing(3),
  },
  btnContainer: {
    padding: Theme.spacing(5),
  },
  btnText: {
    padding: Theme.spacing(0, 2),
  },
  btnFollow: {
    padding: Theme.spacing(2, 6),
  },
}))

function FollowItem({ user }) {
  const classes = useStyles()
  console.log(user)
  return (
    <Button fullWidth className={classes.btnContainer}>
      <Grid
        md={12}
        item
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid
          md={9}
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Avatar className={classes.avatar}></Avatar>
          <Typography variant="subtitle2">{`@${user.username}`}</Typography>
        </Grid>
        <Grid md={3} item container justify="flex-end">
          <Button variant="outlined" className={classes.btnFollow}>
            <Typography variant="button" className={classes.btnText}>
              Follow
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Button>
  )
}

export default FollowItem
