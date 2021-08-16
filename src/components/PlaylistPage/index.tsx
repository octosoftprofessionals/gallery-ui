import React from 'react'
import { useInfiniteQuery } from 'react-query'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

import RotatingCarousel from '../../components/RotatingCarousel'
import Spinner from '../Spinner'

import { featuredInfinitItemsQuery } from '../../services/gallery'
import ArtworkInformation from './ArtworkInformation'
import CreatorInfo from '../GalleryItem/ArtworkItem/CreatorInfo'

const useStyles = makeStyles(Theme => ({}))

const index = () => {
  const classes = useStyles()

  const {
    data: allFeaturedItems = [],
    isLoading: isLoadingFA,
    fetchNextPage: fetchNextPageFA,
  } = useInfiniteQuery(
    'featuredArtworksItemsItems',
    ({ pageParam = 0 }) => featuredInfinitItemsQuery({ offset: pageParam }),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: lastPage => {
        return lastPage.length >= 20
      },
    }
  )

  return (
    <Grid item xs={12} container alignItems="center" justify="center">
      <Grid item xs={12}>
        {isLoadingFA ? (
          <Spinner height="50vh" />
        ) : (
          <RotatingCarousel
            artworksCarousel={allFeaturedItems.pages[0].slice(0, 2)}
            timeout={1000}
            interval={7000}
          />
        )}
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid container justify="space-around">
          <Grid item xs={5} container direction="column">
            <Typography variant="h4">Title</Typography>
            <CreatorInfo
              username="Roger"
              imageUrl={
                'https://f8n-production.imgix.net/creators/profile/c8gley51s-nyan-cat-large-gif-gif-mbf1sa.gif'
              }
            />
          </Grid>
          <Grid item xs={4}>
            <Button>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
              >
                <EditIcon />
                <Typography variant="caption">Edith your playlist</Typography>
              </Grid>
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="space-around"
          direction="row"
        >
          <Grid item xs={5}>
            <Typography variant="h5"> Description</Typography>
            <Paper>
              {
                'Velit laboris magna laborum occaecat. Tempor exercitation veniam est fugiat irure dolor ipsum commodo anim consectetur consectetur irure nisi fugiat. Id qui ad exercitation reprehenderit sit ipsum in ipsum sit sunt esse magna laboris magna laborum occaecat. Tempor exercitation veniam est fugiat irure dolor ipsum commodo anim consectetur consectetur irure nisi fugiat. Id qui ad exercitation reprehenderit sit ipsum in ipsum sit sunt esse magna.'
              }
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">Artwork Information</Typography>
            <ArtworkInformation imageUrl="https://f8n-production.imgix.net/creators/profile/c8gley51s-nyan-cat-large-gif-gif-mbf1sa.gif" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default index
