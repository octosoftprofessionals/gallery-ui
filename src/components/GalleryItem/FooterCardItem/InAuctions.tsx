import React from 'react'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'

import { formatDecimal } from '../../../Utils'
import { colors } from '../../Styles/Colors'

const useStyle = makeStyles(Theme => ({
  footerCard: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: Theme.palette.secondary.light,
    borderRadius: Theme.spacing(0, 0, 4, 4),
  },
  containerTop: {
    padding: Theme.spacing(2, 6),
    backgroundColor: Theme.palette.card.footer,
  },
  boxBtn: { padding: Theme.spacing(0, 6, 2) },
  containerButton: { padding: Theme.spacing(0, 0, 2) },
  timerAlign: {
    whiteSpace: 'pre-line',
    textAlign: 'end',
    '@media (max-width: 576px)': {
      marginLeft: Theme.spacing(13),
    },
    '@media (max-width: 320px)': {
      marginLeft: Theme.spacing(12),
    },
  },
  btn: {
    position: 'relative',
    height: Theme.spacing(2),
    margin: Theme.spacing(4, 0, 0),
    padding: '34px 24px 11px 24px',
  },
  text: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: colors.Black,
    '&:hover': {
      transform: 'none',
      color: Theme.palette.text.secondary,
    },
    fontSize: Theme.typography.fontSize[10],
    margin: '5px',
  },
  link: { textDecoration: 'none', display: 'contents' },
}))

const InAuctions = ({ price, timer, children, link }) => {
  const classes = useStyle()

  return (
    <Grid container className={classes.footerCard}>
      <Grid
        item
        xs={12}
        container
        justify="space-between"
        className={classes.containerTop}
      >
        <Grid item xs={5}>
          <Typography variant="caption" color="textSecondary">
            Current bid
          </Typography>
          <Grid item xs={12}>
            <Typography variant="caption" color="secondary">
              {isNaN(price) ? '—' : `${formatDecimal(price)} ETH`}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={5} container alignItems="flex-start">
          <Grid
            item
            xs={12}
            container
            justify="flex-end"
            className={classes.timerAlign}
          >
            <Typography variant="caption" color="secondary">
              {timer}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container justify="center" className={classes.boxBtn}>
        <Link to={link} className={classes.link}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.btn}
          >
            <Typography
              variant="caption"
              color="secondary"
              className={classes.text}
            >
              Place a Bid
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} className={classes.containerButton}>
        {children}
      </Grid>
    </Grid>
  )
}

export default InAuctions
