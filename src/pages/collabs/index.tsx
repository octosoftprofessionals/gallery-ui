import React from 'react'
import { Grid } from '@material-ui/core'
import Layout from '../../components/Layout'
import CollabsGrid from '../../components/Partnership'

const CollabsPage = () => {
  return (
    <Layout padding="20px" marginTop="0">
      <Grid item xs={11} md={12}>
        {/*  Seria cmo una list de cards */}
        <CollabsGrid />
      </Grid>
    </Layout>
  )
}

export default CollabsPage
