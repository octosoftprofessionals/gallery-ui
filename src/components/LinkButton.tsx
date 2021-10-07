import React from 'react'
import { Link } from 'gatsby'

import { Grid, Typography, Button, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { VisibilityOutlined, OpenInNewOutlined } from '@material-ui/icons'
import BlockIcon from '../assets/block.svg'
import EtherScanIcon from '../assets/etherscan-logo-circle.svg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginBottom: theme.spacing(3),
      width: '100%',
    },
  },
  box: {
    boxSizing: 'border-box',
    width: '60%',
    backgroundColor: theme.palette.secondary.dark,
    alignItems: 'center',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(0),
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  paper: {
    width: '100%',
    padding: theme.spacing(7),
    borderRadius: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    transition: '0.3s all linear',
    fontFamily: theme.typography.fontFamily[3],
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  item: {
    height: '80%',
  },
  icon: {
    fontSize: theme.spacing(8),
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  iconSVG: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    fill: theme.palette.primary.main,
  },
  text: {
    fontSize: theme.spacing(5),
    marginLeft: theme.spacing(3),
  },
  grid: {
    margin: 0,
    color: theme.palette.primary.main,
  },
  link: { textDecoration: 'none', width: 'inherit' },
}))

const LinkButton = ({ link, text, icon }) => {
  const classes = useStyles()

  return (
    <>
      {link ? (
        <Button className={classes.box}>
          <Link to={link} className={classes.link}>
            <Paper elevation={1} className={classes.paper}>
              <Grid item xs={9} container className={classes.grid}>
                {icon === 'iconEtherscan' ? (
                  <EtherScanIcon className={classes.iconSVG} />
                ) : icon === 'iconView' ? (
                  <VisibilityOutlined className={classes.iconSVG} />
                ) : (
                  <BlockIcon className={classes.iconSVG} />
                )}
                <Typography className={classes.text} variant="h6">
                  {text}
                </Typography>
              </Grid>
              <OpenInNewOutlined className={classes.icon} />
            </Paper>
          </Link>
        </Button>
      ) : null}
    </>
  )
}

export default LinkButton
