import React, { useState, useEffect } from 'react'
import {
  Grid,
  Typography,
  Button,
  Snackbar,
  InputAdornment,
} from '@material-ui/core'
import { AlternateEmail } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import DragDrop from './DragDrop'
import { Alert } from '@material-ui/lab'
import { validateEmail } from '../../Utils/stringUtils'
import { Collapse } from '@material-ui/core'
import LinkForm from './LinkForm'
import { useAccountStore } from '../../hooks/useAccountStore'
import { Users } from '../../types'
import { updateUser, /* mailAvailability,*/ getUsersDataField } from '../../services/users'
import EmailValidator from './EmailValidator'

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
  alertUserName: {
    borderRadius: 10,
    padding: theme.spacing(1, 5),
    opacity: 0.7,
    marginTop: theme.spacing(2),
  },
  suscribeBtn: {
    fontSize: theme.typography.fontSize[3],
    fontWeight: 800,
    color: '#010101',
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
    color: theme.palette.primary.main,
    '&:hover': {
      cursor: 'default',
      color: theme.palette.primary.main,
    },
  },
  titleNetwork: {
    marginTop: theme.spacing(13),
  },
  alertSuccess: {
    borderRadius: 6,
    // backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
  },
  iconMail: {
    color: theme.palette.primary.dark,
    marginLeft: theme.spacing(2),
    fontSize: theme.spacing(9),
  },
  extraText: {
    marginTop: theme.spacing(5),
    paddingRight: theme.spacing(16),
    textAlign: 'left',
    '@media (max-width: 576px)': {
      paddingRight: theme.spacing(0),
      marginTop: theme.spacing(0),
      textAlign: 'center',
    },
  },
}))

type Props = {
  userAccount: Users
}

const EditForm = ({ userAccount }: Props) => {
  const classes = useStyle()
  const [name, setName] = React.useState(userAccount.name ?? '')
  const [username, setUserName] = React.useState(userAccount.username ?? '')
  const [email, setEmail] = React.useState(userAccount.email ?? '')

  const [usernameList, setUsernameList] = useState([])
  const [usernameCheck, setUsernameCheck] = useState(true)

  const [userEmailList, setUserEmailList] = useState([])
  const [savedEmail, setSavedEmail] = useState("")

  const [bio, setBio] = React.useState(userAccount.bio ?? '')
  const [word, setWord] = useState('')
  const [error, setError] = useState<boolean>(false)
  const [open, setOpen] = useState(true)
  const [socialNetwork, setSocialNetwork] = useState({
    website: userAccount.website ?? '',
    twitter: userAccount.twitter ?? '',
    instagram: userAccount.instagram ?? '',
    discord: '',
    discordId: userAccount.discordId ?? '',
    youtube: userAccount.youtube ?? '',
    facebook: userAccount.facebook ?? '',
    tiktok: userAccount.tiktok ?? '',
    snapchat: userAccount.snapchat ?? '',
  })
  const [files, setFiles] = useState({ picture: [], cover: [] })
  const [metamaskAccount, setMetamaskAccount] = useAccountStore()
  const [openAlert, setOpenAlert] = useState({ open: false, error: false })
  const [disabled, setDisabled] = useState(true)

  const handleClick = error => {
    setOpenAlert({ error: error, open: true })
  }

  useEffect(() => {
    setDisabled(false)
  }, [files])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenAlert({ error: false, open: false })
  }

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    setDisabled(false)
  }
  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
    setUsernameCheck(false)
    setDisabled(false)
  }
  const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setDisabled(false)
  }
  const handleChangeBio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBio(event.target.value)
    setDisabled(false)
  }

  const getUsernameList = async () => {
    try {
      const usernameList = await getUsersDataField("username")
      console.log(`usernameList ||`, usernameList)
      setUsernameList(usernameList)
    } catch (error) {
      console.error('Error getting username list', error)
    }
  }

  const getUserEmailList = async() => {
    try{
      const usersEmailList = await getUsersDataField("email")
      setUserEmailList(usersEmailList)
    }catch(error){
      console.error("Error getting user email list", error)
    }
  }

  const checkAvailability = (dataList, dataField) => {
    if (username.length === 0) return false
    const RESP = !dataList.includes(dataField)
    return RESP
  }

  useEffect(() => {
    getUsernameList()
    getUserEmailList()
  }, [])

  const handleSubmit = async () => {
    if (validateEmail(email) && checkAvailability(usernameList, username) && ( (!checkAvailability(userEmailList, email) && savedEmail == email) || checkAvailability(userEmailList, email))) {
      setError(false)
      const formData = new FormData()
      formData.append('name', name)
      formData.append('username', username)
      formData.append('profile_img_url', files.picture[0])
      formData.append('cover_img_url', files.cover[0])
      formData.append('public_address', metamaskAccount as string)
      formData.append('email', email)
      formData.append('bio', bio)
      formData.append('website', socialNetwork.website)
      formData.append('twitter', socialNetwork.twitter)
      formData.append('instagram', socialNetwork.instagram)
      formData.append('discord', socialNetwork.discord)
      formData.append('discordId', socialNetwork.discordId)
      formData.append('youtube', socialNetwork.youtube)
      formData.append('facebook', socialNetwork.facebook)
      formData.append('tiktok', socialNetwork.tiktok)
      formData.append('snapchat', socialNetwork.snapchat)
      /* Ultimo intento! */
      try {
        const res = await updateUser(metamaskAccount, formData)
        handleClick(false)
        setDisabled(true)
        window.location.reload() //reload page to see the new username account
        console.log(res)
      } catch (e) {
        handleClick(true)
        console.log(e)
      }
    } else if (!validateEmail(email)) {
      setError(true)
      console.log('mail no ingresado')
    } else {
      handleClick(true)
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
              <Typography
                variant="h4"
                color="primary"
                className={classes.Title}
              >
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

                <Typography className={classes.label}>Username</Typography>
                <TextField
                  variant="outlined"
                  color="primary"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmail className={classes.iconMail} />
                      </InputAdornment>
                    ),
                  }}
                  className={classes.inputProfile}
                  onChange={handleChangeUserName}
                  value={username}
                />
                {checkAvailability(usernameList, username) ? (
                  <Alert
                    variant="filled"
                    severity="success"
                    icon={false}
                    className={classes.alertUserName}
                  >
                    {`Username ${username} is available`}
                  </Alert>
                ) : usernameCheck ? (
                  <Alert
                    variant="filled"
                    severity="success"
                    icon={false}
                    className={classes.alertUserName}
                  >
                    {`Username ${username} is available`}
                  </Alert>
                ) : (
                  <Alert
                    variant="filled"
                    severity="error"
                    icon={false}
                    className={classes.alertUserName}
                  >
                    {`Username ${username} is already taken`}
                  </Alert>
                )}
                <Grid item className={classes.formInput}>
                  <Typography className={classes.label}>
                    * E-Mail (Receive notifications)
                  </Typography>
                  <TextField
                    variant="outlined"
                    color="primary"
                    fullWidth
                    placeholder="Enter your email"
                    className={classes.inputProfile}
                    onChange={handleChangeUser}
                    value={email}
                  />
                </Grid>
                <EmailValidator savedEmail={savedEmail} setSavedEmail={setSavedEmail} checkAvailability={checkAvailability} account={metamaskAccount} email={email} userEmailList={userEmailList} error={error} setError={setError} classes={classes}/>
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
                  Enter a short bio:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="Add Bio"
                  inputProps={{ maxLength: 200 }}
                  helperText={`${bio.length}/200`}
                  multiline
                  className={classes.inputBio}
                  value={bio}
                  rows={8}
                  onChange={event => setBio(event.target.value)}
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
                <Typography
                  variant="body2"
                  color="primary"
                  className={classes.extraText}
                >
                  Recommended size: <br /> 1000x1000px. JPG, PNG or GIF. 10MB
                  max size.
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
                <Typography
                  variant="body2"
                  color="primary"
                  className={classes.extraText}
                >
                  Recommended size:
                  <br /> 1500x500px. JPG, PNG or GIF. 10MB max size.
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
              setDisabled={setDisabled}
            />
            <Button
              onClick={handleSubmit}
              color="primary"
              className={classes.suscribeBtn}
              disabled={disabled ? true : false}
              variant="outlined"
              href="#header"
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
