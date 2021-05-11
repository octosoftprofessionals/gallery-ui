import React from 'react'

import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button, Avatar } from '@material-ui/core'

import { Instagram, Facebook, Twitter } from '@material-ui/icons'
import Verified from '../../../assets/verified.svg'

const useStyle = makeStyles(Theme => ({
  instagram: {
    display: ({ instagram }) => (instagram ? 'block' : 'none'),
  },
  facebook: {
    display: ({ facebook }) => (facebook ? 'block' : 'none'),
  },
  twitter: {
    display: ({ twitter }) => (twitter ? 'block' : 'none'),
  },
  invited: {
    display: ({ invited }) => (invited ? 'block' : 'none'),
  },
  icon: {
    width: Theme.typography.fontSize[10],
    height: Theme.typography.fontSize[10],
    fill: Theme.palette.primary.main,
  },
  link: { textDecoration: 'none' },
  iconVerified: { display: ({ verified }) => (verified ? 'block' : 'none') },
  button: { '&:hover': { backgronundColor: Theme.palette.secondary.main } },
  textButton: {
    fontSize: Theme.typography.fontSize[9],
    fontFamily: Theme.typography.fontFamily[2],
  },
  avatar: {
    width: Theme.typography.fontSize[10],
    height: Theme.typography.fontSize[10],
  },
}))

const ButtonsSocialMedia = ({ links, imgUrl, verified, invited }) => {
  const { instagram, facebook, twitter } = links ? links : ''

  const classes = useStyle({
    instagram,
    facebook,
    twitter,
    verified,
    invited,
  })
  return (
    <>
      {links ? (
        <Grid container direction="column" alignItems="flex-start">
          <Grid item xs={1} className={classes.instagram}>
            <Link to={'/'} className={classes.link}>
              <Button
                variant="text"
                color="secondary"
                startIcon={<Verified className={classes.iconVerified} />}
                endIcon={
                  <Instagram fontSize="small" className={classes.icon} />
                }
                className={classes.button}
              >
                <Typography
                  variant="caption"
                  color="primary"
                  className={classes.textButton}
                >
                  {instagram.handle}
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={1} className={classes.facebook}>
            <Link to={'/'} className={classes.link}>
              <Button
                variant="text"
                color="secondary"
                startIcon={<Verified className={classes.iconVerified} />}
                endIcon={<Facebook fontSize="small" className={classes.icon} />}
                className={classes.button}
              >
                <Typography
                  variant="caption"
                  color="primary"
                  className={classes.textButton}
                >
                  {facebook.handle}
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={1} className={classes.twitter}>
            <Link to={'/'} className={classes.link}>
              <Button
                variant="text"
                color="secondary"
                startIcon={<Verified className={classes.iconVerified} />}
                endIcon={<Twitter fontSize="small" className={classes.icon} />}
                className={classes.button}
              >
                <Typography
                  variant="caption"
                  color="primary"
                  className={classes.textButton}
                >
                  {`@${twitter.handle}`}
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item className={classes.invited}>
            <Link to={'/'} className={classes.link}>
              <Button
                variant="text"
                color="secondary"
                endIcon={<Avatar src={imgUrl} className={classes.avatar} />}
              >
                <Typography
                  variant="caption"
                  color="primary"
                  className={classes.textButton}
                >
                  {`Invited by @${invited}`}
                </Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
    </>
  )
}

export default ButtonsSocialMedia
