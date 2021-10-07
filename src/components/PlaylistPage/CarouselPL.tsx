import React from 'react'
import Carousel from 'react-material-ui-carousel'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid } from '@material-ui/core'
import {
  RadioButtonUnchecked,
  ChevronLeft,
  ChevronRight,
} from '@material-ui/icons'

import EmptyAccount from '../Creator/GridCreator/EmptyAccount'
import CardArtwork from './CardArtwork'

const useStyles = makeStyles(Theme => ({
  root: {
    marginBottom: Theme.spacing(6),
    backgroundColor: Theme.palette.background.paper,
    padding: Theme.spacing(10, 5),
  },
  carousel: {
    height: 'auto',
    minHeight: '100%',
    margin: '0px auto',
    padding: '0px auto',
    overflowY: 'visible',
    width: '100%',
    '@media (max-width: 375px)': {
      paddingTop: 0,
      marginTop: 0,
    },
  },
  '@global': {
    '.bottom': {
      backgroundColor: 'transparent !important',
      color: Theme.palette.secondary.contrastText,
    },
  },
  arrowLeft: {
    position: 'absolute',
    top: 'auto',
    left: 'auto',
    fontSize: Theme.typography.fontSize[7],
    color: Theme.palette.primary.dark,
    '&:hover': {
      '@media (max-width: 576px)': {
        opacity: 1,
      },
    },
    '@media (max-width: 576px)': {
      fontSize: Theme.typography.fontSize[5],
      opacity: 0,
    },
  },
  arrowRight: {
    position: 'absolute',
    top: 'auto',
    right: 'auto',
    fontSize: Theme.typography.fontSize[7],
    color: Theme.palette.primary.dark,
    '&:hover': {
      '@media (max-width: 576px)': {
        opacity: 1,
      },
    },
    '@media (max-width: 576px)': {
      fontSize: Theme.typography.fontSize[5],
      opacity: 0,
    },
  },
  circle: {
    fontSize: Theme.typography.fontSize[7],
    color: Theme.palette.primary.dark,
    '&:hover': {
      '@media (max-width: 576px)': {
        opacity: 1,
      },
    },
    '@media (max-width: 576px)': {
      fontSize: Theme.typography.fontSize[5],
      opacity: 0,
    },
  },
}))

const CarouselPL = ({ artworks, setIndex, emptyMessageProps, ...props }) => {
  const classes = useStyles()

  if (artworks.length === 0) {
    return (
      <Box style={{ padding: 48, width: '100%' }} className={classes.root}>
        <EmptyAccount {...emptyMessageProps} />
      </Box>
    )
  }

  return (
    <Grid item xs={12} className={classes.root}>
      <Carousel
        next={next => setIndex(next)}
        prev={prev => setIndex(prev)}
        indicators={false}
        navButtonsProps={{ className: 'bottom' }}
        className={classes.carousel}
        animation="fade"
        navButtonsAlwaysVisible
        PrevIcon={[
          <ChevronLeft className={classes.arrowLeft} />,
          <RadioButtonUnchecked className={classes.circle} />,
        ]}
        NextIcon={[
          <ChevronRight className={classes.arrowRight} />,
          <RadioButtonUnchecked className={classes.circle} />,
        ]}
      >
        {artworks.map(({ imageUrl, videoUrl, id }) => (
          <CardArtwork
            imageUrl={imageUrl}
            videoUrl={videoUrl}
            key={id}
            {...props}
          />
        ))}
      </Carousel>
    </Grid>
  )
}

export default CarouselPL
