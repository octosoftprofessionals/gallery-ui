import React, { useEffect, useState } from 'react'
import Truncate from 'react-truncate'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography, Divider } from '@material-ui/core'
import CardImage from '../Partnership/CardImage'
import { darkColors } from '../Styles/Colors'
import Irak from '../../assets/irak-website.jpg'
import jakeFried from '../../assets/exhibitionsImg/jake-fried-website.jpg'
import onTheRoofs from '../../assets/exhibitionsImg/on-the-roofs-website.jpg'
import Swoom from '../../assets/exhibitionsImg/swoon-website.jpg'
import VRSession from '../../assets/exhibitionsImg/VR-session-square.jpg'
import { exhibitionSelected } from '../../config/routes'

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
  titleCard: {
    color: darkColors.WhiteSmoke,
  },
  subtitleContainer: { height: 10 },
  titleContainer: { height: 70 },
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

const ExhibitionTitle = ({ exhibition }: { exhibition: any }) => {
  const { title, slug, imageUrl, id, description } = exhibition
  const classes = useStyle()

  const showImage = (slug: string) => {
    switch (slug) {
      case 'cicada-and-tymbal-solo-exhibition':
        return <CardImage imageUrl={Swoom} />
      case 'on-the-roofs':
        return <CardImage imageUrl={onTheRoofs} />
      case 'mike-irak-store':
        return <CardImage imageUrl={Irak} />
      case 'tomdurante-ontheroofs':
        return <CardImage imageUrl={onTheRoofs} />
      case 'nycontheroofs':
        return <CardImage imageUrl={onTheRoofs} />
      case 'every-woman-biennial':
        return <CardImage imageUrl={imageUrl} />
      case 'superchief-gallery-nifty':
        return <CardImage imageUrl={VRSession} />
      case 'nftboxes':
        return <CardImage imageUrl={jakeFried} />
      case 'kunleirak':
        return <CardImage imageUrl={Irak} />
    }
  }

  return (
    <Link to={exhibitionSelected(id)} className={classes.link}>
      <Paper variant="elevation" elevation={1} className={classes.root}>
        {showImage(slug)}
        <div className={classes.infoCard}>
          <div className={classes.titleContainer}>
            <Typography
              variant="h6"
              className={classes.titleCard}
              color="primary"
              align="center"
            >
              {title}
            </Typography>
          </div>
          <Divider light />
          <div className={classes.subtitleContainer}>
            {/* <Typography
              variant="body1"
              className={classes.subtitleCard}
              color="primary"
              align="center"
            ></Typography> */}
          </div>
        </div>
      </Paper>
    </Link>
  )
}

export default ExhibitionTitle
