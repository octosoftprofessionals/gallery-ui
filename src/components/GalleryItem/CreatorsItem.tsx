import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  root: {},
  img: {
    backgroundImage: props => `url(${props.imgUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '50%',
    borderRadius: Theme.spacing(4, 4, 0, 0),
  },
  infoCard: { margin: Theme.spacing(9) },
  containerAvatar: { marginTop: Theme.spacing(9) },
}))

const CreatorsItem = ({ name, artis, imgUrl, avatarUrl }) => {
  const classes = useStyle({ imgUrl: imgUrl })
  return (
    <Paper variant="elevation" elevation={1} className={classes.root}>
      <div className={classes.img} />
      <Grid item container direction="column" justify="space-around">
        <Grid
          item
          xs={12}
          container
          justify="flex-start"
          className={classes.infoCard}
        >
          <Avatar alt="avat" src={`${avatarUrl}`} />
          <Typography variant="h5" color="initial">
            {name}
          </Typography>
          <Grid
            item
            xs={12}
            container
            direction="row"
            alignItems="center"
            className={classes.containerAvatar}
          >
            <Typography variant="subtitle1" color="initial">
              {artis}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Paper>
  )
}

export default CreatorsItem
