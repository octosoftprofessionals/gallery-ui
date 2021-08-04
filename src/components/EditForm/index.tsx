import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import TextField from '@material-ui/core/TextField'
import DragDrop from './DragDrop'
import { Alert, AlertTitle } from '@material-ui/lab'
import { validateEmail } from '../../Utils/stringUtils'
import { Collapse } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkForm from './LinkForm'
import { updateUser } from '../../services/users'
import { useAccountStore } from '../../hooks/useAccountStore'
import { Users } from '../../types'
// Hi there! verify profile is commented //

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
      marginTop: theme.spacing(7),
    },
  },
  formTitle: {
    paddingRight: theme.spacing(10),
    textAlign: 'right',
    fontSize: 32,
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
    padding: theme.spacing(7),
    marginTop: theme.spacing(12),
    borderRadius: theme.spacing(7),
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
        padding: theme.spacing(2, 0),
      },
    },
  },
  inputBio: {
    marginTop: theme.spacing(3),
    '@global': {
      '.MuiInputBase-input': {
        borderRadius: 0,
      },
    },
  },
}))

type Props = {
  userAccount: Users
}

const EditForm = ({ userAccount }: Props) => {
  console.log(userAccount)

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
  const [files, setFiles] = useState({ picture: '', cover: '' })
  const [metamaskAccount, setMetamaskAccount] = useAccountStore()

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
      let data = {
        username: name,
        profile_img_url: '',
        cover_img_url: '',
        public_address: metamaskAccount,
        email: email,
        bio: bio,
        website: socialNetwork.website,
        twitter: socialNetwork.twitter,
        instagram: socialNetwork.instagram,
        discordId: socialNetwork.discordId,
        youtube: socialNetwork.youtube,
        facebook: socialNetwork.facebook,
        tiktok: socialNetwork.tiktok,
        snapchat: socialNetwork.snapchat,
      }
      console.log('data::', data)
      updateUser(data)
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
      <FormControl>
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
                Enter your details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.field}>
              <TextField
                variant="outlined"
                color="primary"
                label="Name"
                fullWidth
                className={classes.inputProfile}
                onChange={handleChangeName}
                value={name}
              />
              <Grid item className={classes.formInput}>
                <TextField
                  variant="outlined"
                  color="primary"
                  label="Email"
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
                  Add a short bio
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Add Bio"
                  name="Add Bio"
                  inputProps={{ maxLength: 200 }}
                  helperText={`${word.length}/200`}
                  multiline
                  className={classes.inputBio}
                  value={word}
                  rows={6}
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
                  Upload a profile image
                </Typography>
                <Grid>
                  <Typography
                    variant="body2"
                    color="primary"
                    className={classes.formText}
                  >
                    Recommended size: 1000x1000px. JPG, PNG or GIF. 10MB max
                    size.
                  </Typography>
                </Grid>
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
                  Upload a cover image
                </Typography>
                <Grid className={classes.formText}>
                  <Typography variant="body2" color="primary">
                    Recommended size: 1000x1000px. JPG, PNG or GIF. 10MB max
                    size.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.form}>
                <DragDrop setFiles={setFiles} typeFile="cover" files={files} />
              </Grid>
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
              fullWidth
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Grid>
  )
}

export default EditForm