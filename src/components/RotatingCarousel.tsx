import React from 'react'
import Carousel from 'react-material-ui-carousel'
import HeroAuction from '../components/HeroAuction'

import {
  RadioButtonUnchecked,
  ChevronLeft,
  ChevronRight,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  '@global': {
    '.bottom': {
      backgroundColor: 'transparent !important',
      color: Theme.palette.secondary.contrastText,
    },
  },
  carousel: {
    height: 'auto',
    minHeight: '100%',
    margin: '0px auto',
    padding: '0px auto',
    overflowY: 'visible',
    width: '100%',
    '@media (max-width: 1400px)': {
      paddingTop: Theme.spacing(13),
    },
    '@media (max-width: 768px)': {
      paddingTop: Theme.spacing(13),
    },
    '@media (max-width: 375px)': {
      paddingTop: 0,
      marginTop: 0,
    },
  },
  arrowLeft: {
    position: 'absolute',
    top: 'auto',
    left: 'auto',
    fontSize: Theme.typography.fontSize[7],
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
  arrowRigt: {
    position: 'absolute',
    top: 'auto',
    right: 'auto',
    fontSize: Theme.typography.fontSize[7],
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

const RotatingCarousel = ({ artworksCarousel, interval, timeout }) => {
  const classes = useStyle()
  return (
    <Carousel
      className={classes.carousel}
      PrevIcon={[
        <ChevronLeft className={classes.arrowLeft} />,
        <RadioButtonUnchecked className={classes.circle} />,
      ]}
      NextIcon={[
        <ChevronRight className={classes.arrowRigt} />,
        <RadioButtonUnchecked className={classes.circle} />,
      ]}
      navButtonsProps={{ className: 'bottom' }}
      navButtonsAlwaysVisible
      animation="slide"
      timeout={timeout}
      interval={interval}
    >
      {artworksCarousel
        ? artworksCarousel.map(artwork => (
            <HeroAuction
              galleryItem={artwork}
              isLoading={false}
              key={artwork.assetId}
            />
          ))
        : null}
    </Carousel>
  )
}
export default RotatingCarousel
