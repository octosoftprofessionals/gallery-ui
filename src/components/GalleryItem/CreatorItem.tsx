import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'

import FooterCardItem from './FooterCardItem'
import CreatorFooter from './FooterCardItem/Creators'

const useStyle = makeStyles(Theme => ({
  root: { position: 'relative' },
  link: { textDecoration: 'none' },
  img: {
    backgroundImage: props => `url(${props.imgUrl})`,
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

const CreatorItem = ({ creator }) => {
  const classes = useStyle({ imgUrl: creator.coverImageUrl })

  return (
    <Paper variant="elevation" elevation={1} className={classes.root}>
      <Link to={`/creator?id=${creator.username}`} className={classes.link}>
        <div className={classes.head}>
          <div className={classes.img} />
          <div className={classes.behindAvatar}>
            <Avatar
              alt="avat"
              src={`${creator.profileImageUrl}`}
              className={classes.avatar}
            />
          </div>
        </div>
        <Grid container justify="flex-start" className={classes.infoCard}>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              {creator.username}
            </Typography>
          </Grid>
          <Typography
            variant="subtitle2"
            className={classes.nameArtis}
          >{`@${creator.name}`}</Typography>
          <div className={classes.conatainerBio}>
            <div className={classes.descriptionBio}>
              <Typography variant="body2" color="primary">
                {creator.bio}
              </Typography>
            </div>
          </div>
          {/* <CreatorFooter followers={followers} link={link} /> */}
        </Grid>
      </Link>
      <FooterCardItem
        followers={creator.followers}
        statesArt="creator"
        price
        timer
        link={`/creator?id=${creator.username}`}
      />
    </Paper>
  )
}

export default CreatorItem