import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { boxShadow } from '../../Styles/Colors'

const useStyles = makeStyles(Theme => ({
  img: {
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: Theme.spacing(4, 4, 0, 0),
    height: '60%',
  },
  containerImg: {
    boxShadow: boxShadow.boxShadow5,
    backgroundColor: Theme.palette.secondary.main,
    borderRadius: Theme.spacing(4),
    margin: Theme.spacing(4),
    height: '15vw',
    '@media (max-width: 576px)': {
      height: '20vh',
      overflow: 'hidden',
    },
  },
  link: { textDecoration: 'none', cursor: 'pointer', display: 'contents' },
}))

const PlaylistItem = ({ imageUrl, titlePlaylist, link }) => {
  const classes = useStyles({ imageUrl })
  return (
    <Link to={link} className={classes.link}>
      <Grid item container className={classes.containerImg}>
        <Grid item xs={12} className={classes.img} />
        <Typography variant="subtitle1" color="primary">
          {titlePlaylist}
        </Typography>
      </Grid>
    </Link>
  )
}

export default PlaylistItem
