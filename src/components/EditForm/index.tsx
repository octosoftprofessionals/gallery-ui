import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import TextField from '@material-ui/core/TextField'
import { DropzoneDialogBase } from 'material-ui-dropzone'

const useStyle = makeStyles(theme => ({
  root: {
    margin: 0,
    backgroundColor: 'Black',
  },
  Title: {
    marginBottom: theme.spacing(14),
    '@media (max-width: 576px)': {
      textAlign: 'center',
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
}))

const EditForm = () => {
  const classes = useStyle()
  const [name, setName] = React.useState('Name')
  const [userName, setUserName] = React.useState('Email')
  const [bio, setBio] = React.useState('Bio')
  const [word, setWord] = useState(0)

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }
  const handleChangeBio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBio(event.target.value)
  }
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        item
        xs={12}
        /*  sm={12} */
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Typography variant="h4" className={classes.Title}>
          Edit Your Profile
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-around"
          className={classes.formContainer}
        >
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h1"
              color="primary"
              className={classes.formTitle}
            >
              Enter your details:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={name}
                onChange={handleChangeName}
                label="Name"
                fullWidth
              />
            </FormControl>
            <FormControl variant="outlined" className={classes.formInput}>
              <InputLabel htmlFor="component-outlined">UserName</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={userName}
                onChange={handleChangeUser}
                label="UserName"
                fullWidth
              />
            </FormControl>
          </Grid>

          <Grid
            container
            direction="row"
            justify="space-around"
            className={classes.form}
          >
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h1"
                color="primary"
                className={classes.formTitle}
              >
                Add a short bio.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Add Bio"
                name="Add Bio"
                inputProps={{ maxLength: 200 }}
                helperText={`${word.length}/200`}
                multiline
                value={word}
                rows={8}
                onChange={event => setWord(event.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default EditForm
