import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import logoSrc from '../../assets/logo.png'

const useStyles = makeStyles(Theme => ({
  root: {
    backgroundColor: Theme.palette.secondary.light,
    padding: Theme.spacing(13, 9),
  },
  link: { textDecoration: 'none', cursor: 'pointer' },
  img: {
    background: `url(${logoSrc})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'inerit',
    backgroundSize: 'contain',
    paddingBottom: `${Theme.spacing(1)}em`,
  },
  containerText: {
    '@media (max-width: 576px)': { flexDirection: 'column' },
  },
}))

const Footer = () => {
  const classes = useStyles()
  const { instagram, twitter, discord, blog } = 'http://localhost:8000/'
  return (
    <>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        direction="row"
        className={classes.root}
      >
        <Grid item xs={12} sm={2}>
          <div className={classes.img} />
        </Grid>
        <Grid item xs={6} sm={5} container direction="row">
          <Grid
            item
            sm={6}
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
        </Grid>

        <Grid
          item
          xs={6}
          sm={5}
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
    </>
  )
}

export default Footer
