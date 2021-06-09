import React from 'react'
import { useQuery } from 'react-query'
import { Grid, Divider, Typography } from '@material-ui/core'
import { featuredItemsQuery } from '../../services/gallery'
import { makeStyles } from '@material-ui/core/styles'
import PartnershipArtworks from './PartnershipArtworks'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
  textButton: { fontSize: Theme.typography.fontSize[3] },
  button: { padding: Theme.spacing(3, 5), margin: Theme.spacing(6) },
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
  const reserveItems = featuredItems.filter(i => i.status === 'reserve')
  const soldItems = featuredItems.filter(i => i.status === 'sold')

  /*   const [pages, setPages] = useState<number>(0)
  const handleNextPages = () => {
    setPages(pages + 1)
  }
  const handleBeforePages = () => {
    if (pages > 0) setPages(pages - 1)
  }
 */
  const classes = useStyle()

  return (
    <>
      <Grid container spacing={1}>
        <h1>Plataform Colaborations</h1>
        <Divider></Divider>
        <Grid
          container
          item
          xs={12}
          spacing={3}
          className={classes.containerItem}
        >
          {/*  <Typography>VER QUE ONDASSS</Typography> */}
          <PartnershipArtworks isLoading={isLoading} data={listedItems} />
        </Grid>
        <Grid
          container
          item
          xs={12}
          spacing={3}
          className={classes.containerItem}
        >
          {/*    <Typography>VER QUE ONDASSS</Typography> */}
          <PartnershipArtworks isLoading={isLoading} data={listedItems} />
        </Grid>
      </Grid>
    </>
  )
}

export default GridPartnershipArtworks
