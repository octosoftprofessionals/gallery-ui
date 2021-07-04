import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Hidden, Typography, withWidth } from '@material-ui/core'

import logoSrc from '../../assets/logoNew.png'
import LogoDarkSrc from '../../assets/light-logo-SC.svg'
import LogoSCNFT from '../../assets/dark-logo-SC.svg'

const useStyles = makeStyles(Theme => ({
  root: {
    backgroundColor: Theme.palette.secondary.light,
    padding: Theme.spacing(13, 9),
    display: ({ pathname }) => (pathname === '/bid' ? 'none' : 'block'),
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
  link: { textDecoration: 'none', cursor: 'pointer' },
  img: {
    width: Theme.spacing(14),
    height: Theme.spacing(14),
    background: `url(${logoSrc})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  },
  logo: {
    display: ({}) => (Theme.palette.type === 'dark' ? 'none' : 'block'),
    width: Theme.spacing(15),
    height: Theme.spacing(15),
  },
  logoDark: {
    display: ({}) => (Theme.palette.type === 'dark' ? 'block' : 'none'),
    width: Theme.spacing(15),
    height: Theme.spacing(15),
  },
  containerText: {
    flexDirection: 'row',
    '@media (max-width: 576px)': {
      flexDirection: 'column',
      alignItems: 'left',
      marginTop: Theme.spacing(3),
    },
  },
}))

const Footer = ({ pathname }) => {
  const classes = useStyles({ pathname })
  const instagram = 'https://www.instagram.com/superchiefgallerynft/'
  const twitter = 'https://twitter.com/SuperchiefNFT'
  const discord = 'https://discord.com/invite/pxjASBky'
  const { communityGuidelines, termsOfService, privacy, careers, help } = '/'
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} container justify="space-between" alignItems="center">
        <Hidden smUp>
          <Grid item container justify="center" xs={12}>
            <Link to="/" className={classes.link}>
              <LogoSCNFT className={classes.logo} />
              <LogoDarkSrc className={classes.logoDark} />
            </Link>
          </Grid>
        </Hidden>
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify="space-between"
          className={classes.containerText}
          alignItems="center"
        >
          <Hidden xsDown>
            <LogoSCNFT className={classes.logo} />
            <LogoDarkSrc className={classes.logoDark} />
          </Hidden>
          <Link to={instagram} target="_blank" className={classes.link}>
            <Typography variant="overline">Instagram</Typography>
          </Link>
          <Link to={twitter} target="_blank" className={classes.link}>
            <Typography variant="overline">Twitter</Typography>
          </Link>
          <Link to={discord} target="_blank" className={classes.link}>
            <Typography variant="overline">Discord</Typography>
          </Link>
          {/* <Link to={blog} className={classes.link}>
              <Typography variant="overline">Blog</Typography>
            </Link> */}
        </Grid>

        <Grid
          item
          xs={6}
          sm={5}
          container
          justify="space-between"
          className={classes.containerText}
          alignItems="center"
        >
          <Link to="/AboutUs" className={classes.link}>
            <Typography variant="overline">About Us</Typography>
          </Link>
          <Link to={termsOfService} className={classes.link}>
            <Typography variant="overline">Terms of Service</Typography>
          </Link>
          <Link to={privacy} className={classes.link}>
            <Typography variant="overline">Privacy</Typography>
          </Link>
          <Link to={careers} className={classes.link}>
            <Typography variant="overline">Careers</Typography>
          </Link>
          <Link to={help} className={classes.link}>
            <Typography variant="overline">Help</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withWidth()(Footer)
