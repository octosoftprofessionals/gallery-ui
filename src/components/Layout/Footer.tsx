import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import LogoOctosoft from '../../assets/logoHome.svg'

import logoSrc from '../../assets/logoNew.png'

const useStyles = makeStyles(Theme => ({
  root: {
    backgroundColor: Theme.palette.secondary.light,
    padding: Theme.spacing(10, 15),
    '@media (max-width: 576px)': {
      alignItems: 'flex-start',
      padding: Theme.spacing(2, 0),
    },
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '@media (max-width: 576px)': {
      flexDirection: 'row',
      textAlign: 'left',
      marginTop: 15,
    },
  },
  signature: {
    display: 'block',
    lineHeight: '14px',
  },
  centerd: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  aligned: {
    display: 'flex',
    alignContent: 'center',
  },
  link: { textDecoration: 'none', cursor: 'pointer' },
  img: {
    flex: 1,
    width: Theme.spacing(14),
    height: Theme.spacing(14),
    background: `url(${logoSrc})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'contain',
  },
  imgContainer: {
    marginRight: 30,
  },
  containerText: {
    flexDirection: 'row',
    '@media (max-width: 576px)': {
      flexDirection: 'column',
      alignItems: 'left',
      marginTop: 10,
    },
  },
  icon: {
    height: 30,
    margin: 0,
    padding: 0,
    '@media (max-width: 576px)': {
      marginBottom: 0,
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  const { instagram, twitter, discord, blog } = 'http://localhost:8000/'
  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      className={classes.root}
    >
      <Grid
        item
        container
        justify="space-evenly"
        alignItems="center"
        xs={2}
        md={5}
        className={classes.containerText}
      >
        <Grid item container className={classes.text}>
          <Grid item xs={1} className={classes.imgContainer}>
            <div className={classes.img} />
          </Grid>
          <div className={classes.centerd}>
            <Typography variant="overline" className={classes.signature}>
              Developed by
            </Typography>
            <div className={classes.aligned}>
              <Link
                to="https://octosoftprofessionals.com/"
                className={classes.link}
              >
                <LogoOctosoft className={classes.icon} />
              </Link>
              <Typography variant="caption">Octosoft Professionals</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        xs={2}
        md={6}
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid
          item
          md={5}
          lg={4}
          container
          justify="space-between"
          className={classes.containerText}
          alignItems="center"
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
          xs={1}
          md={7}
          container
          justify="space-between"
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
