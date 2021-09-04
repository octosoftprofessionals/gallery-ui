import React from 'react'
import { Grid, Paper } from '@material-ui/core'

const SoldItem = () => {
  return (
    <Grid item xs={4}>
      <Paper>
        <Grid container direction="row">
          <Grid item xs={6}>
            sold
          </Grid>
          <Grid item xs={6}>
            Other
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default SoldItem
