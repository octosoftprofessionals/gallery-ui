import React from 'react'
import { useQuery } from 'react-query'
import { Grid, Divider, Typography } from '@material-ui/core'
import { featuredItemsQuery } from '../../services/gallery' /// Esto trae la data?
import { makeStyles } from '@material-ui/core/styles'
import PartnershipArtworks from './PartnershipArtworks'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
  textButton: { fontSize: Theme.typography.fontSize[3] },
  button: { padding: Theme.spacing(3, 5), margin: Theme.spacing(6) },
  divider: {
    color: 'black',
    width: '96%',
  },
  title: { padding: Theme.spacing(10) },
  subtitle: {
    textAlign: 'left',
    marginTop: Theme.spacing(10),
    marginLeft: Theme.spacing(10),
  },
}))

const GridPartnershipArtworks = () => {
  const {
    data: featuredItems = [],
    isLoading,
    status: statusFeaturedItemsQuery,
  } = useQuery('featuredItemsQuery', featuredItemsQuery)

  console.log('featuredItems:', featuredItems)
  console.log(
    'featuredItems.map(i => i.status):',
    featuredItems.map(i => i.status)
  )

  const listedItems = featuredItems.filter(i => i.status === 'listed')

  const classes = useStyle()

  return (
    <>
      <Grid container justify="center">
        <h1 className={classes.title}>Plataform Colaborations</h1>
        <Grid container justify="left">
          <h3 className={classes.subtitle}>SuperChief x KnownOrigin</h3>
        </Grid>

        <hr className={classes.divider}></hr>
        <Grid
          container
          item
          xs={12}
          spacing={3}
          className={classes.containerItem}
        >
          <PartnershipArtworks isLoading={isLoading} data={listedItems} />
        </Grid>
        <Grid container justify="left">
          <h3 className={classes.subtitle}>SuperChief x Rarible</h3>
        </Grid>
        <hr className={classes.divider}></hr>
        <Grid
          container
          item
          xs={12}
          spacing={3}
          className={classes.containerItem}
        >
          <PartnershipArtworks isLoading={isLoading} data={listedItems} />
        </Grid>
      </Grid>
    </>
  )
}

export default GridPartnershipArtworks
