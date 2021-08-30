import React, { useEffect, useState } from 'react'
import Truncate from 'react-truncate'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'
import { deltaTime, timeFormat, isTypeVideo } from '../../../Utils/index'
import { GalleryItem } from '../../../services/gallery'
import { Box } from '@material-ui/core'
import { artworkPathFrom, profilePathFromAddress } from '../../../config/routes'
import CardImage from '../CardImage'
import SuperchiefLogo from '../../../assets/logo-collabs.jpeg'

const useStyle = makeStyles(Theme => ({
  root: {
    position: 'relative',
    borderRadius: Theme.spacing(0, 0, 11, 11),
    overflow: 'hidden',
  },
  infoCard: {
    padding: Theme.spacing(9),
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Theme.palette.card.footer,
    gridGap: Theme.spacing(9),
  },
  containerAvatar: { marginBottom: Theme.spacing(3) },
  link: { textDecoration: 'none' },
  containerVideo: { position: 'relative', paddingBottom: '100%' },
  inVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    display: 'flex',
  },
  video: {
    display: 'block',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: Theme.spacing(11, 11, 0, 0),
  },
}))

const PartnershipItem = ({ galleryItem }: { galleryItem: any }) => {
  const { title, subtitle, link } = galleryItem
  const classes = useStyle()
  return (
    <a href={link} target="_blank" className={classes.link}>
      <Paper variant="elevation" elevation={1} className={classes.root}>
        <CardImage imageUrl={SuperchiefLogo} />

        <div className={classes.infoCard}>
          <Typography variant="h5" color="primary">
            {title}
          </Typography>
          <Typography variant="h6" color="primary">
            {subtitle}
          </Typography>
        </div>
      </Paper>
    </a>
  )
}

export default PartnershipItem
