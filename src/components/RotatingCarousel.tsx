import React from 'react'
import Carousel from 'react-material-ui-carousel'
import HeroAuction from '../components/HeroAuction'
import { colors } from '../components/Styles/Colors'

import {
  RadioButtonUnchecked,
  ChevronLeft,
  ChevronRight,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  /* carousel: {
        '&:hover': {
            '@media (max-width: 576px)': {
                marginTop: 0,
                paddingTop: 0,
            },
        },
    }, */
  arrowLeft: {
    position: 'absolute',
    top: 'auto',
    left: 'auto',
    fontSize: 50,
    '&:hover': {
      '@media (max-width: 576px)': {
        opacity: 100,
      },
    },
    '@media (max-width: 576px)': {
      fontSize: 20,
      opacity: 0,
    },
  },
  arrowRigt: {
    position: 'absolute',
    top: 'auto',
    right: 'auto',
    fontSize: 50,
    '&:hover': {
      '@media (max-width: 576px)': {
        opacity: 100,
      },
    },
    '@media (max-width: 576px)': {
      fontSize: 20,
      opacity: 0,
    },
  },
  circle: {
    fontSize: 50,
    '&:hover': {
      '@media (max-width: 576px)': {
        opacity: 100,
      },
    },
    '@media (max-width: 576px)': {
      fontSize: 20,
      opacity: 0,
    },
  },
}))

const RotatingCarousel = ({ artworksCarousel, interval, timeout, theme }) => {
  const classes = useStyle()
  return (
    <Carousel
      /* className={classes.carousel} */ PrevIcon={[
        <ChevronLeft className={classes.arrowLeft} />,
        <RadioButtonUnchecked className={classes.circle} />,
      ]}
      NextIcon={[
        <ChevronRight className={classes.arrowRigt} />,
        <RadioButtonUnchecked className={classes.circle} />,
      ]}
      navButtonsProps={
        theme === 'dark'
          ? {
              style: {
                backgroundColor: 'transparent',
                color: colors.WhiteSmoke,
              },
            }
          : {
              style: {
                backgroundColor: 'transparent',
                color: colors.Black,
              },
            }
      }
      navButtonsAlwaysVisible
      animation="slide"
      timeout={timeout}
      interval={interval}
    >
      {artworksCarousel
        ? artworksCarousel.map((artwork, i) => (
            <HeroAuction galleryItem={artwork} isLoading={false} key={i} />
          ))
        : null}
    </Carousel>
  )
}
export default RotatingCarousel
