import React from 'react'
import { Link } from 'gatsby'
import {
  Button,
  Divider,
  Grid,
  OutlinedInput,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../../../Styles/Colors'

const Styles = makeStyles(Theme => ({
  divider: {
    backgroundColor: Theme.palette.primary.main,
  },
  button: {
    height: 58,
    borderRadius: Theme.shape.borderRadius[2],
    backgroundColor: Theme.palette.secondary.dark,
    border:
      Theme.palette.type === 'light'
        ? '2px solid #010101'
        : '2px solid #00FFFF',
  },
  textButton: {
    fontSize: Theme.typography.fontSize[3],
    color: Theme.palette.primary.dark,
  },
  box: { padding: Theme.spacing(11) },
  '@global': {
    '.MuiOutlinedInput-input': {
      color: colors.DimGray,
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: '2px solid #fff',
    },
  },
  input: {
    borderRadius: Theme.shape.borderRadius[2],
    fontFamily: Theme.typography.fontFamily[1],
    fontSize: Theme.typography.fontSize[10],
  },
  eth: {
    fontSize: Theme.typography.fontSize[9],
    lineHeight: '1.5',
  },
  link: { textDecoration: 'none' },
}))

const ButtonBid = ({ valueBid, setValueBid, link }) => {
  const classes = Styles()
  return (
    <Grid
      item
      xs={12}
      container
      // justify="space-around"
      justify="center"
      alignItems="center"
      className={classes.box}
    >
      {/* <Grid item xs={5}>
        <OutlinedInput
          color="primary"
          type="number"
          placeholder={'0.00'}
          fullWidth
          value={valueBid}
          onChange={e => setValueBid(e.target.value)}
          className={classes.input}
          endAdornment={
            <Grid item xs={6} container justify="space-around">
              <Grid item xs={1}>
                <Divider orientation="vertical" className={classes.divider} />
              </Grid>
              <Typography
                variant="button"
                color="primary"
                className={classes.eth}
              >
                ETH
              </Typography>
            </Grid>
          }
        />
      </Grid> */}
      <Grid item xs={12}>
        <Link to={link} className={classes.link}>
          <Button variant="text" fullWidth className={classes.button}>
            <Typography variant="caption" className={classes.textButton}>
              Place a bid
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default ButtonBid
