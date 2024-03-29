import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'
import { formatDecimal } from '../../../Utils'
import { colors } from '../../Styles/Colors'


const BuyNow = ({ price, link, children }) => {
  const classes = useStyle()
  return (
    <Grid container className={classes.footerCard}>
      <Grid item container justify="center" className={classes.containerTop}>
        {/* Link to "Buy now" page or Event that handles the purchase in future */}
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
              {isNaN(price)
                ? 'Buy Now — ETH'
                : `Buy Now ${formatDecimal(price)} ETH`}
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

const useStyle = makeStyles(Theme => ({
  footerCard: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: Theme.palette.secondary.light,
    borderRadius: Theme.spacing(0, 0, 4, 4),
  },
  containerTop: { padding: Theme.spacing(2, 6) },
  containerButton: { padding: Theme.spacing(0, 0, 2) },
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

export default BuyNow
