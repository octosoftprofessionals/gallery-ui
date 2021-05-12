import React from 'react'
import { Grid, Typography, Button, Link, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined'

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
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(0),
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
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  iconText: { fontSize: theme.spacing(9) },
  iconPng: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  text: {
    fontSize: theme.spacing(5),
    marginLeft: theme.spacing(3),
  },
  grid: {
    margin: 0,
    color: theme.palette.primary.main,
  },
}))

const LinkButton = ({ link, text, icon }) => {
  const classes = useStyles()
  const preventDefault = event => event.preventDefault()

  return (
    <Button
      href={link}
      underline="none"
      target="_blank"
      className={classes.box}
      component={Link}
    >
      <Paper elevation={1} className={classes.paper}>
        <Grid container xs={8} className={classes.grid}>
          <img src={icon} className={classes.iconPng} />
          <Typography className={classes.text} variant="h6">
            {text}
          </Typography>
        </Grid>
        <OpenInNewOutlinedIcon className={classes.icon} />
      </Paper>
    </Button>
  )
}

export default LinkButton
