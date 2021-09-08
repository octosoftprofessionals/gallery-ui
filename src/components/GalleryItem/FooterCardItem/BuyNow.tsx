import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'
import { formatDecimal } from '../../../Utils'

const useStyle = makeStyles(Theme => ({
  footerCard: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: Theme.palette.card.footer,
    borderRadius: Theme.spacing(0, 0, 4, 4),
  },
  conateinerTop: { padding: Theme.spacing(2, 6) },
  conateinerButtom: { padding: Theme.spacing(0, 0, 2) },
  btn: {
    padding: Theme.spacing(2),
    margin: Theme.spacing(4, 0, 0),
    '&:hover': {
      transform: 'none',
      translate: 'none',
    },
  },
  text: {
    '&:hover': {
      color: Theme.palette.primary.light
    }
  }
}))

const BuyNow = ({ price, children }) => {
  const classes = useStyle()
  return (
    <Grid container className={classes.footerCard}>
      <Grid item container justify="center" className={classes.conateinerTop}>
        {/* Link to "Buy now" page or Event that handles the purchase in future */}
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          className={classes.btn}
        >
          <Typography variant="caption" color="secondary" className={classes.text}>
            {isNaN(price)
              ? 'Buy this now for — ETH'
              : `Buy this now for ${formatDecimal(price)} ETH`}
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12} className={classes.conateinerButtom}>
        {children}
      </Grid>
    </Grid>
  )
}

export default BuyNow
