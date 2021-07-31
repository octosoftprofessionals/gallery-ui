import React, { useState } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BtnForm from './BtnForm'

const useStyle = makeStyles(theme => ({
  root: {
    margin: 0,
  },
  Title: {
    marginBottom: theme.spacing(14),
    '@media (max-width: 576px)': {
      textAlign: 'center',
      fontSize: theme.typography.fontSize[11],
      marginBottom: theme.spacing(10),
    },
  },
  formContainer: {
    border: '1px solid grey',
    borderRadius: theme.shape.borderRadius[2],
    maxWidth: '50%',
    padding: theme.spacing(14),
    backgroundColor: theme.palette.secondary.main,
    '@media (max-width: 576px)': {
      maxWidth: '100%',
      padding: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
    },
  },
  form: {
    marginTop: theme.spacing(16),
    '@media (max-width: 576px)': {
      maxWidth: '100%',
      padding: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
    },
  },
  formTitle: {
    paddingRight: theme.spacing(10),
    textAlign: 'right',
    fontSize: 32,
    color: theme.palette.primary.dark,
    '@media (max-width: 576px)': {
      marginBottom: theme.spacing(10),
    },
  },
  formInput: {
    marginTop: theme.spacing(10),
  },
  field: {
    '@global': {
      '.MuiInput-input': {
        margin: '6px 0 7px',
        padding: '0 5px',
      },
    },
  },
  formText: {
    marginTop: theme.spacing(5),
    paddingRight: theme.spacing(10),
    textAlign: 'right',
    '@media (max-width: 576px)': {
      marginBottom: theme.spacing(10),
    },
  },
  alert: {
    borderRadius: 10,
  },
  suscribeBtn: {
    fontSize: theme.typography.fontSize[3],
    fontWeight: 800,
    padding: theme.spacing(7),
    marginTop: theme.spacing(12),
    borderRadius: theme.spacing(7),
    '@media (max-width: 576px)': {
      margin: theme.spacing(3),
      padding: theme.spacing(3),
    },
  },
  Btn: {
    marginTop: theme.spacing(2),
  },
  icon: {
    fontSize: theme.typography.fontSize[6],
  },
}))

const LinkForm = () => {
  const classes = useStyle()
  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      justify="center"
      alignItems="flex-start"
    >
      <BtnForm />
    </Grid>
  )
}

export default LinkForm
