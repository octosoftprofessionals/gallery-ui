import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Divider } from '@material-ui/core'
import CardImage from '../Partnership/CardImage'
import { darkColors } from '../Styles/Colors'
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
  },
  titleCard: {
    color: darkColors.WhiteSmoke,
  },
  subtitleContainer: { height: 60, paddingBottom: 20 },
  titleContainer: { height: 60, marginBottom: 20 },
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
  const {
    title,
    image,
    idExhibition,
    description: { description },
  } = exhibition
  const classes = useStyle()

  return (
    <Link to={exhibitionSelected(idExhibition)} className={classes.link}>
      <Paper variant="elevation" elevation={1} className={classes.root}>
        <CardImage imageUrl={image.file.url} />
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
            <Typography
              variant="body2"
              className={classes.subtitleCard}
              color="primary"
              align="center"
            >
              {description}
            </Typography>
          </div>
        </div>
      </Paper>
    </Link>
  )
}

export default ExhibitionTitle
