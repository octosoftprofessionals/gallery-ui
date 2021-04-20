import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'

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
  link: { textDecoration: 'none' },
}))

const BlogItem = ({ title, desciptio, imgUrl, link, publishDate }) => {
  const classes = useStyle({ imgUrl: imgUrl })
  return (
    <a href={link} className={classes.link}>
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
            <Typography variant="h5" color="initial">
              {title}
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
                {desciptio}
              </Typography>
              <Typography variant="caption" color="initial">
                {`PUBLISHED ${publishDate}`}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Paper>
    </a>
  )
}

export default BlogItem
