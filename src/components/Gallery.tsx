import React from 'react'

import { Grid, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Spinner from '../components/Spinner'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
  textButton: { fontSize: Theme.typography.fontSize[3] },
  button: {
    padding: Theme.spacing(3, 5),
    margin: Theme.spacing(6),
    display: ({ hasNextPage }) => (hasNextPage ? 'block' : 'none'),
  },
}))

const Gallery = ({
  pages = [],
  renderItem,
  handleNext,
  hasNextPage,
  isLoading,
}) => {
  const classes = useStyle({ hasNextPage })

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
        {pages.map(items => {
          return items.map((artwork, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.containerItem}
            >
              {renderItem(artwork, index)}
            </Grid>
          ))
        })}
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

export default Gallery
