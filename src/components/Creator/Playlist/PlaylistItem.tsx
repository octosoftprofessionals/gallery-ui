import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, IconButton } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'

import { boxShadow } from '../../Styles/Colors'

const useStyles = makeStyles(Theme => ({
  root: { position: 'relative', width: '90%' },
  img: {
    backgroundImage: ({ imageUrl }: { imageUrl: string }) => `url(${imageUrl})`,
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
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'contents',
  },
  icon: {
    fontSize: Theme.typography.fontSize[4],
  },
  containerIcon: {
    position: 'absolute',
    bottom: Theme.spacing(4),
    right: Theme.spacing(0),
  },
}))

const PlaylistItem = ({
  imageUrl,
  titlePlaylist,
  id,
  link,
  onDelete,
}: {
  imageUrl: string
  titlePlaylist: string
  id: number
  link: string
  onDelete: funtion
}) => {
  const classes = useStyles({ imageUrl })

  return (
    <div className={classes.root}>
      <Link to={link} className={classes.link}>
        <Grid item container className={classes.containerImg}>
          <Grid item xs={12} className={classes.img} />
          <Typography variant="subtitle1" color="primary">
            {titlePlaylist}
          </Typography>
        </Grid>
      </Link>
      <IconButton
        aria-label="delete"
        onClick={() => onDelete(id)}
        className={classes.containerIcon}
      >
        <DeleteOutline className={classes.icon} />
      </IconButton>
    </div>
  )
}

export default PlaylistItem
