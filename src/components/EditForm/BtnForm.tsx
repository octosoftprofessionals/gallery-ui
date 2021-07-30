import React from 'react'
import { Grid, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { OpenInNewOutlined } from '@material-ui/icons'
import LanguageIcon from '@material-ui/icons/Language'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(14),
    '& > *': {
      marginBottom: theme.spacing(3),
      width: '100%',
    },
  },
  paper: {
    width: '100%',
    padding: theme.spacing(3, 10),
    borderRadius: theme.spacing(6),
    backgroundColor: theme.palette.secondary.dark,
    fontFamily: theme.typography.fontFamily[3],
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '@media (max-width: 576px)': {
      flexDirection: 'column',
    },
  },
  /*   divider: {
    backgroundColor: theme.palette.primary.main,
    marginLeft: '30px',
    marginRight: '30px',
    height: 'inherit',
  }, */
  icon: {
    fontSize: theme.spacing(8),
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
}))

const LinkButton = () => {
  const classes = useStyles()
  const [web, setWeb] = React.useState('')
  const [discord, setDiscord] = React.useState('')
  const [youtube, setYouTube] = React.useState('')
  const [Facebook, setFacebook] = React.useState('')
  const [twitch, setTwitch] = React.useState('')
  const [tickTock, setTickTock] = React.useState('')
  const [snapChat, setSnapChat] = React.useState('')

  const handleChangeWeb = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeb(event.target.value)
  }
  const handleChangeDiscord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscord(event.target.value)
  }
  const handleChangeYT = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYouTube(event.target.value)
  }
  const handleChangeFB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFacebook(event.target.value)
  }
  const handleChangeTwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTwitch(event.target.value)
  }
  const handleChangeTickTock = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTickTock(event.target.value)
  }
  const handleChangeSnapChat = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSnapChat(event.target.value)
  }
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid container direction="row" className={classes.paper}>
        <Grid container xs={12} sm={6}>
          <LanguageIcon className={classes.icon} />
          <Typography className={classes.text} variant="h6">
            Website
          </Typography>
        </Grid>
        <Grid container xs={12} sm={6}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Website</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={web}
              onChange={handleChangeWeb}
              label="Website"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.paper}>
        <Grid container xs={12} sm={6}>
          <OpenInNewOutlined className={classes.icon} />
          <Typography className={classes.text} variant="h6">
            Twitter
          </Typography>
        </Grid>
        <Grid container xs={12} sm={6}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Discord </InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={discord}
              onChange={handleChangeDiscord}
              label="Discord"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.paper}>
        <Grid container xs={12} sm={6}>
          <YouTubeIcon className={classes.icon} />
          <Typography className={classes.text} variant="h6">
            YouTube
          </Typography>
        </Grid>
        <Grid container xs={12} sm={6}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">YouTube</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={youtube}
              onChange={handleChangeYT}
              label="YouTube"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.paper}>
        <Grid container xs={12} sm={6}>
          <FacebookIcon className={classes.icon} />
          <Typography className={classes.text} variant="h6">
            Facebook
          </Typography>
        </Grid>
        <Grid container xs={12} sm={6}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Facebook</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={Facebook}
              onChange={handleChangeFB}
              label="Facebook"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.paper}>
        <Grid container xs={12} sm={6}>
          <OpenInNewOutlined className={classes.icon} />
          <Typography className={classes.text} variant="h6">
            Twitch
          </Typography>
        </Grid>
        <Grid container xs={12} sm={6}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Twitch</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={twitch}
              onChange={handleChangeTwitch}
              label="Twitch"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.paper}>
        <Grid container xs={12} sm={6}>
          <OpenInNewOutlined className={classes.icon} />
          <Typography className={classes.text} variant="h6">
            TickTock
          </Typography>
        </Grid>
        <Grid container xs={12} sm={6}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">TickTock</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={tickTock}
              onChange={handleChangeTickTock}
              label="TickTock"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container direction="row" className={classes.paper}>
        <Grid container xs={12} sm={6}>
          <OpenInNewOutlined className={classes.icon} />
          <Typography className={classes.text} variant="h6">
            SnapChat
          </Typography>
        </Grid>
        <Grid container xs={12} sm={6}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">SnapChat</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={snapChat}
              onChange={handleChangeSnapChat}
              label="Snapchat"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LinkButton
