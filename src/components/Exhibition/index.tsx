import React, { useState } from 'react'
import { useQuery } from 'react-query'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Paper, Button } from '@material-ui/core'

import { featuredItemsQuery } from '../../services/gallery'
import GalleryExhibition from './GalleryExhibition'
import useQueryParams from '../../hooks/useQueryParams'

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    padding: theme.spacing(11, 0),
    '@media (max-width: 576px)': {
      textAlign: 'center',
    },
  },
  button: {
    borderRadius: theme.shape.borderRadius[2],
    padding: theme.spacing(4, 2),
    justifyContent: 'none',
    marginBottom: theme.spacing(5),
  },
  containerCollection: {
    padding: theme.spacing(0, 7),
    '@media (max-width: 576px)': {
      padding: 0,
    },
  },
  containerGallery: {
    overflowY: 'scroll',
    overflowX: 'hidden',
    height: `${theme.spacing(15)}vh`,
  },
  typographyButton: {
    alignSelf: 'left',
    color: theme.palette.primary.contrastText,
  },
  img: {
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  paper: {
    padding: theme.spacing(3, 5),
  },
  containerButtons: {
    height: `${theme.spacing(13)}vh`,
    overflowY: 'scroll',
    overflowX: 'hidden',
    padding: theme.spacing(2),
  },
}))

const imgUrls = [
  'https://i.pinimg.com/originals/7f/08/52/7f0852baa4ec65a696b2a54c833215d4.jpg',
]

const collectionTitles = [
  'Shapes in Art',
  'Art 101',
  'Superchief Collections',
  'Ashes to Ashes',
  'Play the Game',
  'Shapes in Art',
  'Art 101',
  'Superchief Collections',
  'Ashes to Ashes',
  'Play the Game',
]

const Exhibition = () => {
  const classes = useStyles({ imageUrl: imgUrls })
  const { contractAddress, tokenId } = useQueryParams()
  const [displayReportModal, setDisplayReportModal] = useState(false)
  const {
    data: featuredItems = [],
    isLoading,
    status: statusFeaturedItemsQuery,
  } = useQuery('featuredItemsQuery', featuredItemsQuery)
  console.log(featuredItems)
  return (
    <Grid container justify="center">
      <Typography className={classes.title} variant="h5" color="primary">
        Superchief Collections, Curated by our staff
      </Typography>
      <Grid item container justify="space-between">
        <Grid item xs={12} sm={3} className={classes.containerCollection}>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="body1" align="center" color="primary">
              Collections
            </Typography>
            <div className={classes.containerButtons}>
              {collectionTitles.map(title => {
                return (
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={[classes.img, classes.button]}
                  >
                    <Typography
                      className={classes.typographyButton}
                      variant="caption"
                      color="textSecondary"
                    >
                      {title}
                    </Typography>
                  </Button>
                )
              })}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9} className={classes.containerGallery}>
          <GalleryExhibition isLoading={isLoading} data={featuredItems} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Exhibition
