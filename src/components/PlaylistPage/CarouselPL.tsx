import React from 'react'
import Carousel from 'react-material-ui-carousel'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import CardArtwork from './CardArtwork'

const useStyles = makeStyles(Theme => ({
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
}))

const CarouselPL = ({ artworks, ...props }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12}>
      <Carousel
        className={classes.carousel}
        navButtonsAlwaysVisible
        animation="slide"
        indicatorIconButtonProps={{
          style: {
            color: 'gray', // 3
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: 'whitesmoke', // 2
            backgroundColor: 'black',
          },
        }}
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
