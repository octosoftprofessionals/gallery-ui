import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'

import FooterCardItem from './FooterCardItem'
import CreatorFooter from './FooterCardItem/Creators'
import { GalleryItem } from '../../../services/gallery'
import { profilePathFromAddress } from '../../config/routes'

const useStyle = makeStyles(Theme => ({
  root: { position: 'relative' },
  link: { textDecoration: 'none' },
  img: {
    backgroundImage: ({ imgUrl }) => `url(${imgUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '55%',
    borderRadius: Theme.spacing(4, 4, 0, 0),
  },
  infoCard: { padding: Theme.spacing(14, 9, 13, 9) },
  head: { position: 'relative' },
  avatar: { width: 80, height: 80 },
  behindAvatar: {
    bottom: `-${Theme.spacing(10)}%`,
    left: Theme.spacing(9),
    position: 'absolute',
    backgroundColor: Theme.palette.secondary.main,
    borderRadius: `${Theme.shape.borderRadius[3]}%`,
    padding: Theme.spacing(2),
  },
  conatainerBio: {
    paddingBottom: '40%',
    marginTop: Theme.spacing(5),
    maxHeight: Theme.spacing(15),
  },
  descriptionBio: {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
  nameArtis: {
    fontSize: Theme.typography.fontSize[5],
  },
}))

const CreatorItem = ({
  galleryItem = {},
  ...rootProps
}: {
  galleryItem: GalleryItem | undefined
}) => {
  const {
    creatorUsername,
    creatorImageUrl,
    creatorAddress,
    description,
  } = galleryItem
  const classes = useStyle({ imgUrl: creatorImageUrl })
  const linkCreator = profilePathFromAddress(creatorAddress)

  return (
    <Paper variant="elevation" elevation={1} className={classes.root}>
      <Link to={linkCreator} className={classes.link}>
        <div className={classes.head}>
          <div className={classes.img} />
          <div className={classes.behindAvatar}>
            <Avatar
              alt="avat"
              src={`${creatorImageUrl}`}
              className={classes.avatar}
            />
          </div>
        </div>
        <Grid container justify="flex-start" className={classes.infoCard}>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              {creatorUsername}
            </Typography>
          </Grid>
          <Typography
            variant="subtitle2"
            className={classes.nameArtis}
          >{`@${creatorUsername}`}</Typography>
          <div className={classes.conatainerBio}>
            <div className={classes.descriptionBio}>
              <Typography variant="body2" color="primary">
                {description}
              </Typography>
            </div>
          </div>
        </Grid>
      </Link>
      <FooterCardItem
        followers={0}
        statesArt="creator"
        price
        timer
        link={linkCreator}
      />
    </Paper>
  )
}

export default CreatorItem
