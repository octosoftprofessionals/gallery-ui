import React from 'react'

import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'

import {
  Instagram,
  Facebook,
  Twitter,
  Language,
  YouTube,
} from '@material-ui/icons'

import Discord from '../../../assets/discord.svg'
import Snapchat from '../../../assets/snapchat.svg'
import Twitch from '../../../assets/twitch.svg'
import Tiktok from '../../../assets/tiktok.svg'

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
  tiktok: {
    display: ({ tiktok }) => (tiktok ? 'block' : 'none'),
  },
  twitch: {
    display: ({ twitch }) => (twitch ? 'block' : 'none'),
  },
  discord: {
    display: ({ discord }) => (discord ? 'block' : 'none'),
  },
  snapchat: {
    display: ({ snapchat }) => (snapchat ? 'block' : 'none'),
  },
  youtube: {
    display: ({ youtube }) => (youtube ? 'block' : 'none'),
  },
  web: {
    display: ({ website }) => (website ? 'block' : 'none'),
  },
  icon: {
    width: Theme.typography.fontSize[10],
    height: Theme.typography.fontSize[10],
    fill: Theme.palette.primary.main,
  },
  link: { textDecoration: 'none' },
}))

const Links = ({ links }) => {
  const {
    instagram,
    facebook,
    twitter,
    youtube,
    snapchat,
    tiktok,
    twitch,
    discord,
    website,
  } = links ? links : ''

  const classes = useStyle({
    instagram,
    facebook,
    twitter,
    youtube,
    snapchat,
    tiktok,
    twitch,
    discord,
    website,
  })
  return (
    <>
      <Grid container direction="column" alignItems="flex-start">
        <Grid item xs={1} className={classes.instagram}>
          <Link to={'/'} className={classes.link}>
            <Button
              variant="text"
              color="primary"
              startIcon={
                <Instagram fontSize="small" className={classes.icon} />
              }
            >
              <Typography variant="caption" color="primary">
                {instagram.platform}
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.facebook}>
          <Link to={'/'} className={classes.link}>
            <Button
              variant="text"
              color="primary"
              startIcon={<Facebook fontSize="small" className={classes.icon} />}
            >
              <Typography variant="caption" color="primary">
                {facebook.platform}
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.twitter}>
          <Link to={'/'} className={classes.link}>
            <Button
              variant="text"
              color="primary"
              startIcon={<Twitter fontSize="small" className={classes.icon} />}
            >
              <Typography variant="caption" color="primary">
                {twitter.platform}
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.youtube}>
          <Link to={'/'} className={classes.link}>
            <Button
              variant="text"
              color="primary"
              startIcon={<YouTube fontSize="small" className={classes.icon} />}
            >
              <Typography variant="caption" color="primary">
                {youtube.platform}
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.tiktok}>
          <Link to={'/'} className={classes.link}>
            <Button
              variant="text"
              color="primary"
              startIcon={<Tiktok className={classes.icon} />}
            >
              <Typography variant="caption" color="primary">
                {tiktok.platform}
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.twitch}>
          <Link to={'/'} className={classes.link}>
            <Button
              variant="text"
              color="primary"
              startIcon={<Twitch className={classes.icon} />}
            >
              <Typography variant="caption" color="primary">
                {twitch.platform}
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.discord}>
          <Link to={'/'} className={classes.link}>
            <Button
              variant="text"
              color="primary"
              startIcon={<Discord className={classes.icon} />}
            >
              <Typography variant="caption" color="primary">
                {discord.platform}
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.snapchat}>
          <Link to={'/'} className={classes.link}>
            <Button
              variant="text"
              color="primary"
              startIcon={<Snapchat className={classes.icon} />}
            >
              <Typography variant="caption" color="primary">
                {snapchat.platform}
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.web}>
          <Link to={'/'} className={classes.link}>
            <Button
              variant="text"
              color="primary"
              startIcon={<Language fontSize="small" className={classes.icon} />}
            >
              <Typography variant="caption" color="primary">
                {website.handle}
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default Links
