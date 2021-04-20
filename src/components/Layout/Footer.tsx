import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import logoSrc from '../../assets/logoNew.png'

const useStyles = makeStyles(Theme => ({
  root: {
    backgroundColor: Theme.palette.secondary.light,
    padding: Theme.spacing(13, 9),
  },
  link: { textDecoration: 'none', cursor: 'pointer' },
  img: {
    flex: 1,
    width: Theme.spacing(13),
    height: Theme.spacing(13),
    background: `url(${logoSrc})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'contain',
  },
  containerText: {
    '@media (max-width: 576px)': { flexDirection: 'column' },
  },
}))

const Footer = () => {
  const classes = useStyles()
  const { instagram, twitter, discord, blog } = 'http://localhost:8000/'
  return (
    <Grid container className={classes.root}>
      <Grid item xs={1} container justify="center">
        <div className={classes.img} />
      </Grid>
      <Grid
        item
        xs={12}
        md={11}
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid
          item
          xs={6}
          md={3}
          container
          justify="space-evenly"
          className={classes.containerText}
        >
          <Link to={instagram} className={classes.link}>
            <Typography variant="overline">Instagram</Typography>
          </Link>
          <Link to={twitter} className={classes.link}>
            <Typography variant="overline">Twitter</Typography>
          </Link>
          <Link to={discord} className={classes.link}>
            <Typography variant="overline">Discord</Typography>
          </Link>
          <Link to={blog} className={classes.link}>
            <Typography variant="overline">Blog</Typography>
          </Link>
        </Grid>

        <Grid
          item
          xs={6}
          md={5}
          container
          justify="space-evenly"
          className={classes.containerText}
        >
          <Link to={instagram} className={classes.link}>
            <Typography variant="overline">Community Guidelines</Typography>
          </Link>
          <Link to={instagram} className={classes.link}>
            <Typography variant="overline">Terms of Service</Typography>
          </Link>
          <Link to={instagram} className={classes.link}>
            <Typography variant="overline">Privacy</Typography>
          </Link>
          <Link to={instagram} className={classes.link}>
            <Typography variant="overline">Careers</Typography>
          </Link>
          <Link to={instagram} className={classes.link}>
            <Typography variant="overline">Help</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
