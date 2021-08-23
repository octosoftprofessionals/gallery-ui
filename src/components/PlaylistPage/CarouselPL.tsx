import React from 'react'
import Carousel from 'react-material-ui-carousel'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import CardArtwork from './CardArtwork'

const useStyles = makeStyles(Theme => ({
  root: { marginBottom: Theme.spacing(6) },
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
}))

const CarouselPL = ({ artworks, setIndex, ...props }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} className={classes.root}>
      <Carousel
        next={next => setIndex(next)}
        prev={prev => setIndex(prev)}
        indicators={false}
        className={classes.carousel}
        animation="fade"
        navButtonsAlwaysVisible
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
