import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Paper, Typography } from '@material-ui/core'

import FooterCardItem from './FooterCardItem'

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

const CreatorsItem = ({
  name,
  artis,
  imgUrl,
  avatarUrl,
  bio,
  link,
  followers,
}) => {
  const classes = useStyle({ imgUrl: imgUrl })
  return (
    <a href={link} className={classes.link}>
      <Paper variant="elevation" elevation={1} className={classes.root}>
        <div className={classes.head}>
          <div className={classes.img} />
          <div className={classes.behindAvatar}>
            <Avatar
              alt="avat"
              src={`${avatarUrl}`}
              className={classes.avatar}
            />
          </div>
        </div>
        <Grid container justify="flex-start" className={classes.infoCard}>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              {name}
            </Typography>
          </Grid>
          <Typography
            variant="subtitle2"
            className={classes.nameArtis}
          >{`@${artis}`}</Typography>

          <div className={classes.conatainerBio}>
            <div className={classes.descriptionBio}>
              <Typography variant="body2" color="primary">
                {bio}
              </Typography>
            </div>
          </div>
          <FooterCardItem
            followers={followers}
            statesArt="creator"
            price
            timer
            link={link}
          />
        </Grid>
      </Paper>
    </a>
  )
}

export default CreatorsItem
