import React from 'react'

import { Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}))
const IconAvatar = ({
  altAccountUser,
  ImgUrl,
}: {
  altAccountUser: string
  ImgUrl: string
}) => {
  const classes = useStyle()
  return (
    <Grid item xs={1} container alignContent="center">
      <Avatar className={classes.avatar} alt={altAccountUser} src={ImgUrl} />
    </Grid>
  )
}

export default IconAvatar
