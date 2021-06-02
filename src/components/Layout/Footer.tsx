import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Hidden, Typography, withWidth } from '@material-ui/core'

import logoSrc from '../../assets/logoNew.png'
import LogoSCNFT from '../../assets/SCNFT_Logo_Transparent.svg'

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
    width: Theme.spacing(14),
    height: Theme.spacing(14),
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
  const { instagram, twitter, discord } = 'http://localhost:8000/'
  const { communityGuidelines, termsOfService, privacy, careers, help } = '/'
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} container justify="space-between" alignItems="center">
        <Hidden smUp>
          <Grid item container justify="center" xs={12}>
            <LogoSCNFT className={classes.logo} />
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
          </Hidden>
          <Link to={instagram} className={classes.link}>
            <Typography variant="overline">Instagram</Typography>
          </Link>
          <Link to={twitter} className={classes.link}>
            <Typography variant="overline">Twitter</Typography>
          </Link>
          <Link to={discord} className={classes.link}>
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
          <Link to={communityGuidelines} className={classes.link}>
            <Typography variant="overline">Community Guidelines</Typography>
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
