import React from 'react'
import { Grid } from '@material-ui/core'

import InAuctions from './InAuctions'
import Reserve from './Reserve'
import Sold from './Sold'

const FooterCardItem = ({ price, timer, statesArt }) => {
  return (
    <Grid item>
      {statesArt === 'auction' ? (
        <InAuctions price={price} timer={timer} />
      ) : statesArt === 'reserve' ? (
        <Reserve price={price} />
      ) : (
        <Sold price={price} />
      )}
    </Grid>
  )
}

export default FooterCardItem
