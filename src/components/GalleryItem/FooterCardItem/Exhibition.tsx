import React from 'react'

import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'
import TooltipToOpenSea from './TooltipToOpenSea/Tooltip'

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
  containerTop: { padding: Theme.spacing(2, 6) },
  containerButton: { padding: Theme.spacing(0, 0, 2) },
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

const Exhibition = ({
  link,
  children,
}: {
  link: string
  children?: React.ReactNode
}) => {
  const classes = useStyle()
  return (
    <Grid container className={classes.footerCard}>
      <Grid item container justify="center" className={classes.containerTop}>
        <Link to={link} className={classes.link}>
          <TooltipToOpenSea />
        </Link>
      </Grid>
      <Grid item xs={12} className={classes.containerButton}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Exhibition
