import React from 'react'

import { Grid, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Spinner from '../../Spinner'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
  textButton: { fontSize: Theme.typography.fontSize[3] },
  button: {
    padding: Theme.spacing(3, 5),
    margin: Theme.spacing(6),
    display: ({ hasNextPage }: { hasNextPage: boolean }) =>
      hasNextPage ? 'block' : 'none',
  },
}))

const GalleryGridFavorite = ({
  pages = [],
  renderItem,
  handleNext,
  hasNextPage,
  isLoading,
  ...prop
}) => {
  const classes = useStyle({ hasNextPage })
  const { favoriteArtworks } = pages[0]

  const favoriteStack = () => {
    const favoriteArtworksClone = [...favoriteArtworks]
    const reversedOrderFavorites = []
    for (let i = 0; i < favoriteArtworks.length; i++) {
      reversedOrderFavorites.push(favoriteArtworksClone.pop())
    }
    return reversedOrderFavorites
  }

  const reversedArtworks = favoriteStack()

  return (
    <>
      <Grid
        item
        lg={10}
        container
        direction="row"
        justify="space-around"
        alignContent="center"
        wrap="wrap"
      >
        {reversedArtworks.map((artwork, index) => (
          <Grid item xs={12} sm={6} {...prop} className={classes.containerItem}>
            {renderItem(artwork, index)}
          </Grid>
        ))}
      </Grid>
      {isLoading ? (
        <Spinner height="50vh" />
      ) : (
        <Grid item container justify="center">
          <Button
            variant="outlined"
            className={classes.button}
            onClick={handleNext}
          >
            <Typography variant="button" className={classes.textButton}>
              Load More
            </Typography>
          </Button>
        </Grid>
      )}
    </>
  )
}

export default GalleryGridFavorite
