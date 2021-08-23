import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Snackbar } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import DragDrop from './DragDrop'
import { Alert, AlertTitle } from '@material-ui/lab'
import { validateEmail } from '../../Utils/stringUtils'
import { Collapse } from '@material-ui/core'
import LinkForm from './LinkForm'
import axios from 'axios'
import { useAccountStore } from '../../hooks/useAccountStore'
import { Users } from '../../types'
import { useMutation } from 'react-query'
// Hi there! verify profile is commented //

const useStyle = makeStyles(theme => ({
  '@global': {
    '.MuiOutlinedInput-inputMultiline': {
      padding: theme.spacing(2, 3),
    },
  },
  root: {
    margin: 0,
  },
  Title: {
    marginBottom: theme.spacing(13),
    fontSize: 43,
    '@media (max-width: 576px)': {
      textAlign: 'center',
      fontSize: theme.typography.fontSize[11],
      marginBottom: theme.spacing(10),
    },
  },
  formContainer: {
    borderRadius: theme.shape.borderRadius[2],
    maxWidth: '63%',
    padding: theme.spacing(10, 15),
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
      marginTop: theme.spacing(7),
    },
  },
  formTitle: {
    paddingRight: theme.spacing(10),
    textAlign: 'left',
    fontSize: 23,
    color: theme.palette.primary.dark,
    '@media (max-width: 576px)': {
      paddingRight: theme.spacing(0),
      fontSize: 28,
      textAlign: 'center',
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
    '@media (max-width: 576px)': {
      maxWidth: '100%',
      padding: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
    },
  },
  fieldInput: {
    '@global': {
      '.MuiInput-input': {
        margin: '6px 0 7px',
        padding: '0 5px',
      },
    },
    '@media (max-width: 576px)': {
      maxWidth: '100%',
      padding: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
    },
  },
  formText: {
    marginTop: theme.spacing(5),
    paddingRight: theme.spacing(10),
    textAlign: 'right',
    '@media (max-width: 576px)': {
      paddingRight: theme.spacing(0),
      marginTop: theme.spacing(0),
      textAlign: 'center',
    },
  },
  alert: {
    borderRadius: 10,
  },
  suscribeBtn: {
    fontSize: theme.typography.fontSize[3],
    fontWeight: 800,
    color: theme.palette.secondary.dark,
    padding: theme.spacing(7),
    marginTop: theme.spacing(12),
    borderRadius: theme.spacing(7),
    textTransform: 'none',
    '@media (max-width: 576px)': {
      // margin: theme.spacing(3),
      margin: theme.spacing(3, 0),
      padding: theme.spacing(3),
    },
  },
  Btn: {
    marginTop: theme.spacing(2),
    '@media (max-width: 576px)': {
      /* width: '100%', */
      padding: theme.spacing(3),
      marginBottom: theme.spacing(0),
    },
  },
  icon: {
    fontSize: theme.typography.fontSize[6],
    '@media (max-width: 576px)': {
      display: 'flex',
      flexDirection: 'column',
      fontSize: theme.typography.fontSize[12],
      margin: theme.spacing(0, 16, 0, 16),
    },
  },
  inputProfile: {
    '@global': {
      '.MuiOutlinedInput-root': {
        borderRadius: 50,
        padding: theme.spacing(1, 0),
        border: `1px solid ${theme.palette.primary.dark}`,
      },
    },
  },
  inputBio: {
    marginTop: theme.spacing(3),
    '@global': {
      '.MuiOutlinedInput-root': {
        borderRadius: 16,
        padding: theme.spacing(1, 0),
        border: `1px solid ${theme.palette.primary.dark}`,
      },
    },
  },
  label: {
    marginLeft: theme.spacing(4),
    fontWeight: 400,
    fontSize: theme.typography.fontSize[3],
  },
  titleNetwork: {
    marginTop: theme.spacing(13),
  },
  alertSuccess: {
    borderRadius: 6,
    // backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
  },
}))

type Props = {
  userAccount: Users
}

const EditForm = ({ userAccount }: Props) => {
  const classes = useStyle()
  const [name, setName] = React.useState(userAccount.username)
  const [email, setEmail] = React.useState(userAccount.email)
  const [bio, setBio] = React.useState(userAccount.bio)
  const [word, setWord] = useState('')
  const [error, setError] = useState<boolean>(false)
  const [open, setOpen] = useState(true)
  const [socialNetwork, setSocialNetwork] = useState({
    website: userAccount.website,
    twitter: userAccount.twitter,
    instagram: userAccount.instagram,
    discordId: userAccount.discordId,
    youtube: userAccount.youtube,
    facebook: userAccount.facebook,
    tiktok: userAccount.tiktok,
    snapchat: userAccount.snapchat,
  })
  const [files, setFiles] = useState({ picture: [], cover: [] })
  const [metamaskAccount, setMetamaskAccount] = useAccountStore()
  const [openAlert, setOpenAlert] = useState({ open: false, error: false })


  const handleClick = error => {
    setOpenAlert({ error: error, open: true })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenAlert({ error: false, open: false })
  }

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const handleChangeBio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBio(event.target.value)
  }

  const handleSubmit = () => {
    if (validateEmail(email)) {
      
      setError(false)
      const formData = new FormData()
      formData.append('username', name)
      formData.append('profile_img_url', files.picture[0])
      formData.append('cover_img_url', files.cover[0])
      formData.append('public_address', metamaskAccount as string)
      formData.append('email', email)
      formData.append('bio', bio)
      formData.append('website', socialNetwork.website)
      formData.append('twitter', socialNetwork.twitter)
      formData.append('instagram', socialNetwork.instagram)
      formData.append('discordId', socialNetwork.discordId)
      formData.append('youtube', socialNetwork.youtube)
      formData.append('facebook', socialNetwork.facebook)
      formData.append('tiktok', socialNetwork.tiktok)
      formData.append('snapchat', socialNetwork.snapchat)

      /* Ultimo intento! */
      try {
        const res = axios.post(`http://localhost:3000/v1/users/update/${(metamaskAccount as string)}`,formData, {
        headers: {
            'content-type': 'multipart/form-data'
        }
      })
      handleClick(false)
        console.log(res);
      } catch(e) {
        handleClick(true)
        console.log(e);
      }
    } else {
      setError(true)
      console.log('mail no ingresado')
    }
  }

  const [testFile, setTestFile] = useState(null)
  const onChangeTestFile = (e) => {
    setTestFile(e.target.files[0])
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <FormControl>
        <Grid item xs={12} container direction="column" alignItems="center">
          <Grid
            container
            direction="row"
            justify="space-around"
            className={classes.formContainer}
          >
            <Grid
              container
              justify="center"
              alignItems="flex-start"
              item
              md={12}
              id="edit-profile"
            >
              <Typography variant="h4" className={classes.Title}>
                Edit Your Profile
              </Typography>
            </Grid>
            <Grid container item md={12} justify="space-between">
              <Grid item justify="flex-start" xs={12} md={6}>
                <Typography
                  variant="h1"
                  color="primary"
                  className={classes.formTitle}
                >
                  Enter your details:
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                container
                direction="column"
                className={classes.fieldInput}
              >
                <Typography className={classes.label}>Name</Typography>
                <TextField
                  variant="outlined"
                  color="primary"
                  fullWidth
                  className={classes.inputProfile}
                  onChange={handleChangeName}
                  value={name}
                />
                <Grid item className={classes.formInput}>
                  <Typography className={classes.label}>
                    E-Mail (Receive notifications)
                  </Typography>
                  <TextField
                    variant="outlined"
                    color="primary"
                    fullWidth
                    className={classes.inputProfile}
                    onChange={handleChangeUser}
                    value={email}
                  />
                </Grid>
                <Collapse in={error}>
                  <Alert
                    variant="filled"
                    severity="error"
                    className={classes.alert}
                  >
                    <strong>Error:</strong> invalid entry
                  </Alert>
                </Collapse>
              </Grid>
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
                  Add a short bio:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="Add Bio"
                  inputProps={{ maxLength: 200 }}
                  helperText={`${word.length}/200`}
                  multiline
                  className={classes.inputBio}
                  value={word}
                  rows={8}
                  onChange={event => setWord(event.target.value)}
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6} className={classes.form}>
                <Typography
                  variant="h1"
                  color="primary"
                  className={classes.formTitle}
                >
                  Upload a profile image:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.form}>
                <DragDrop setFiles={setFiles} typeFile="user" files={files} />
              </Grid>
              <Grid item xs={12} sm={6} className={classes.form}>
                <Typography
                  variant="h1"
                  color="primary"
                  className={classes.formTitle}
                >
                  Upload a cover image:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.form}>
                <DragDrop setFiles={setFiles} typeFile="cover" files={files} />
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-start"
              alignItems="center"
              item
              className={classes.titleNetwork}
              md={12}
            >
              <Typography
                variant="h1"
                color="primary"
                className={classes.formTitle}
              >
                Share your social networks:
              </Typography>
            </Grid>
            <LinkForm
              socialNetwork={socialNetwork}
              setSocialNetwork={setSocialNetwork}
            />
            <Button
              onClick={handleSubmit}
              color="primary"
              className={classes.suscribeBtn}
              variant="outlined"
              href="#edit-profile"
            >
              Save Changes
            </Button>
            <Snackbar
              open={openAlert.open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              {openAlert.error ? (
                <Alert severity="error">An error has occurred.</Alert>
              ) : (
                <Alert
                  onClose={handleClose}
                  severity="success"
                  className={classes.alertSuccess}
                >
                  Your profile was succesfully updated.
                </Alert>
              )}
            </Snackbar>
          </Grid>
        </Grid>
      </FormControl>
    </Grid>
  )
}

export default EditForm
