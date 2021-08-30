import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  footerCard: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: Theme.palette.secondary.light,
    borderRadius: Theme.spacing(0, 0, 4, 4),
  },
  conateinerTop: { padding: Theme.spacing(0, 6, 2) },
  conateinerButtom: { padding: Theme.spacing(0, 0, 2) },
  btn: {
    padding: Theme.spacing(2),
    margin: Theme.spacing(4, 0, 0),
    '&:hover': {
      transform: 'none',
      translate: 'none',
    },
  },
  btnText: {
    color: Theme.palette.card.footer,
    fontSize: Theme.typography.fontSize[10],
  },
}))

const Offer = ({ children }) => {
  const classes = useStyle()
  return (
    <Grid container className={classes.footerCard}>
      <Grid item container justify="center" className={classes.conateinerTop}>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          className={classes.btn}
        >
          <Typography variant="button" className={classes.btnText}>
            Offer
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12} className={classes.conateinerButtom}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Offer
