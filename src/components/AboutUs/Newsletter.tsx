import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import {
  Button,
  Divider,
  Grid,
  Hidden,
  Typography,
  withWidth,
} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  root: { padding: Theme.spacing(12, 0) },
  price: {
    fontSize: 48,
    color: Theme.palette.primary.dark,
  },
  titlePrice: { fontSize: Theme.typography.fontSize[3] },

  divider: {
    backgroundColor: Theme.palette.primary.main,
  },

  texTimer: {
    fontSize: Theme.typography.fontSize[3],
    marginTop: Theme.spacing(2),
  },
  button: { borderRadius: Theme.shape.borderRadius[2] },
  textButton: { fontSize: Theme.typography.fontSize[3] },
  numberTimer: { fontSize: Theme.typography.fontSize[6] },
  link: { textDecoration: 'none' },
  subTitle: {
    fontSize: 24,
    fontWeight: 400,
  },
  btnGreen: {
    background: Theme.palette.buttons.wallet,
    width: 200,
    height: 50,
    marginLeft: 40,
    marginTop: 20,
  },
  textField: {
    color: Theme.palette.primary.main,
    width: 400,
  },
}))

const Newsletter = ({ pathname }) => {
  const [disableInfo, setDisableInfo] = useState(false)

  const classes = useStyle({ disableInfo })
  const price = '22,353'
  const money = '$47,526,749.46'
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          Can’t get enough?
        </Typography>
      </Grid>
      <Grid
        item
        xs={11}
        container
        direction="row"
        alignContent="center"
        justify="space-between"
        className={classes.root}
      >
        <Grid item xs={12} container direction="column">
          <Typography
            variant="button"
            color="primary"
            className={classes.subTitle}
          >
            Subscribe to our newsletter.
          </Typography>
          <Divider orientation="horizontal" className={classes.divider} />
          <Grid container xs={12} direction="row">
            <TextField
              id="filled-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="filled"
            />
            <Button variant="contained" className={classes.btnGreen}>
              <Typography variant="button">Subscribe</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withWidth()(Newsletter)
