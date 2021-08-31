import React from 'react'
import { useQuery } from 'react-query'
import { Grid, Typography } from '@material-ui/core'
import { featuredItemsQuery } from '../../services/gallery'
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
    marginBottom: '5px',
    marginLeft: Theme.spacing(10),
  },
}))

const GridPartnershipArtworks = () => {
  const {
    data: featuredItems = [],
    isLoading,
    status: statusFeaturedItemsQuery,
  } = useQuery('featuredItemsQuery', featuredItemsQuery)

  const listedItems = featuredItems.slice(0, 4)

  const classes = useStyle()

  const data = [
    {
      title: 'Makers Place',
      subtitle: 'VR Graffiti Sessions Vol. 1',
      link: 'https://makersplace.com/superchiefgallerynft/drops/vr-graffiti-sessions/',
    },
  ]

  return (
    <Grid container justify="center">
      <Typography variant="h4" color="primary" className={classes.title}>
        Platform Collaborations
      </Typography>
      <Grid container justify="left">
        {/* <Typography
          variant="caption"
          color="primary"
          className={classes.subtitle}
        >
          SuperChief x KnownOrigin
        </Typography> */}
      </Grid>

      <hr className={classes.divider}></hr>
      <Grid container item xs={12} className={classes.containerItem}>
        <PartnershipArtworks isLoading={isLoading} data={data} />
      </Grid>
      {/* <Grid container justify="left">
        <Typography
          variant="caption"
          color="primary"
          className={classes.subtitle}
        >
          SuperChief x Rarible
        </Typography>
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
      </Grid> */}
    </Grid>
  )
}

export default GridPartnershipArtworks
