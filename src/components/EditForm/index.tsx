import React, { useState } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import TextField from '@material-ui/core/TextField'
import DragDrop from './DragDrop'
import { Alert, AlertTitle } from '@material-ui/lab'
import { validateEmail } from '../../Utils/stringUtils'
import { Collapse } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
  root: {
    margin: 0,
    backgroundColor: 'Black',
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
}))

const EditForm = () => {
  const classes = useStyle()
  const [name, setName] = React.useState('Name')
  const [userName, setUserName] = React.useState('Email')
  const [bio, setBio] = React.useState('Bio')
  const [word, setWord] = useState(0)
  const [error, setError] = useState<boolean>(false)
  const [open, setOpen] = useState(true)

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }
  const handleChangeBio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBio(event.target.value)
  }
  const handleSubmit = () => {
    if (validateEmail(value)) {
      setOpen(false)
    } else {
      setError(true)
    }
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
                className={classes.field}
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
                helperText={`${word}/200`}
                multiline
                value={word}
                rows={8}
                onChange={event => setWord(event.target.value)}
                variant="outlined"
                fullWidth
              />
              <Collapse in={false}>
                <Alert
                  variant="filled"
                  severity="error"
                  className={classes.alert}
                >
                  <strong>Error:</strong> invalid entry
                </Alert>
              </Collapse>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.form}>
              <Typography
                variant="h1"
                color="primary"
                className={classes.formTitle}
              >
                Upload a profile image
              </Typography>
              <Grid className={classes.formText}>
                <Typography variant="body2" color="primary">
                  Recommended size: 1000x1000px. JPG, PNG or GIF. 10MB max size.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.form}>
              <DragDrop />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.form}>
              <Typography
                variant="h1"
                color="primary"
                className={classes.formTitle}
              >
                Upload a cover image
              </Typography>
              <Grid className={classes.formText}>
                <Typography variant="body2" color="primary">
                  Recommended size: 1000x1000px. JPG, PNG or GIF. 10MB max size.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.form}>
              <DragDrop />
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit}
            color="primary"
            className={classes.suscribeBtn}
            variant="outlined"
            fullWidth
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default EditForm
