import React from 'react'

import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography } from '@material-ui/core'
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
  containerTop: { padding: Theme.spacing(0, 6, 2) },
  containerButton: { padding: Theme.spacing(0, 0, 2) },
  btn: {
    position: 'relative',
    height: Theme.spacing(2),
    margin: Theme.spacing(4, 0, 0),
    padding: '34px 24px 11px 24px',
  },
  btnText: {
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
    height: '100%',
  },
  link: { textDecoration: 'none', display: 'contents' },
}))

const Offer = ({
  link,
  children,
}: {
  link: string
  children: React.ReactNode
}) => {
  const classes = useStyle()
  return (
    <Grid container className={classes.footerCard}>
      <Grid item container justify="center" className={classes.containerTop}>
        <Link to={link} className={classes.link}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.btn}
          >
            <Typography variant="button" className={classes.btnText}>
              Make an offer
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

export default Offer
