import React from 'react'
import { Grid, Typography, Avatar, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  root: {
    marginTop: Theme.spacing(13),
  },
  creator: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: Theme.spacing(0, 0, 6, 0),
  },
  large: {
    marginRight: Theme.spacing(11),
    width: 120,
    height: 120,
  },
  link: {
    fontSize: Theme.spacing(8),
    margin: Theme.spacing(4, 0, 0, 0),
    fontFamily: 'Bai Jamjuree',
  },
  description: {
    fontFamily: 'Bai Jamjuree',
    fontWeight: 500,
  },
}))

const CreatorSection = ({ imgUrl, linkProfile, name, descriptionCreator }) => {
  const classes = useStyle()
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={classes.root}
    >
      <Grid item xs={6} container direction="row">
        <Avatar className={classes.large} alt={name} src={imgUrl} />
        <div className={classes.creator}>
          <Link underline="none" href={linkProfile}>
            <Typography variant="h4">{name}</Typography>
          </Link>
          <Link underline="none" href={linkProfile}>
            <Typography
              variant="subtitle2"
              className={classes.link}
            >{`@${name}`}</Typography>
          </Link>
        </div>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.description} variant="h6">
          {descriptionCreator}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CreatorSection
