import React, { useState } from 'react'
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
    width: 'inherit',
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
    '@media (max-width: 576px)': {
      width: 150,
    },
  },
  textField: {
    color: Theme.palette.primary.main,
    width: 400,
    '@media (max-width: 576px)': {
      width: 250,
    },
  },
}))

const Newsletter = () => {
  const classes = useStyle()
  const [email, setEmail] = useState('')

  const handleSend = () => {
    setEmail('')
  }
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Typography variant="h5" color="primary">
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
        <Grid container item xs={12} sm={6} md={6} direction="column">
          <Grid item>
            <Typography
              variant="button"
              color="primary"
              className={classes.subTitle}
            >
              Subscribe to our newsletter.
            </Typography>
          </Grid>
          <Grid item>
            <Divider orientation="horizontal" className={classes.divider} />
          </Grid>
          <Grid item>
            <TextField
              id="filled-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              value={email}
              autoComplete="email"
              margin="normal"
              variant="filled"
              onChange={e => setEmail(e.target.value)}
            />
            <Button className={classes.btnGreen} onClick={handleSend}>
              <Typography variant="button">Subscribe</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withWidth()(Newsletter)
