import React from 'react'
import { Grid, Typography, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LanguageIcon from '@material-ui/icons/Language'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import Discord from '../../assets/discord.svg'
import Twitch from '../../assets/twitch.svg'
import SnapChat from '../../assets/snapchat.svg'
import TickTock from '../../assets/tiktok.svg'

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
    flexDirection: 'row',
    alignItems: 'center',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '@media (max-width: 576px)': {
      flexDirection: 'column',
    },
  },
  icon: {
    fontSize: theme.spacing(8),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  icon2: {
    width: '20px',
    heigth: '20px',
    fill: theme.palette.primary.main,
  },
  icon3: {
    width: '20px',
    heigth: '20px',
    fill: theme.palette.primary.main,
    marginTop: 0,
    padding: 0,
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
  containerInput: {
    paddingLeft: theme.spacing(2),
  },
  inputProfile: {
    '@media (max-width: 576px)': {
      marginTop: 15,
    },

    '@global': {
      '.MuiOutlinedInput-root': {
        borderRadius: 50,
        padding: theme.spacing(2, 0),
      },
    },
  },
  titleSocialNetwork: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}))

const LinkButton = ({ socialNetwork, setSocialNetwork }) => {
  const classes = useStyles()

  const [web, setWeb] = React.useState('')
  const [discord, setDiscord] = React.useState('')
  const [youtube, setYouTube] = React.useState('')
  const [Facebook, setFacebook] = React.useState('')
  const [twitch, setTwitch] = React.useState('')
  const [tickTock, setTickTock] = React.useState('')
  const [snapChat, setSnapChat] = React.useState('')

  const handleChangeWeb = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSocialNetwork({ ...socialNetwork, web: `https://${event.target.value}` })
  }
  const handleChangeDiscord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSocialNetwork({ ...socialNetwork, discord: event.target.value })
  }
  const handleChangeYT = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSocialNetwork({ ...socialNetwork, youtube: event.target.value })
  }
  const handleChangeFB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSocialNetwork({
      ...socialNetwork,
      fb: `facebook.com/${event.target.value}`,
    })
  }
  const handleChangeTwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSocialNetwork({
      ...socialNetwork,
      twitch: `twitch.tv/${event.target.value}`,
    })
  }
  const handleChangeTickTock = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSocialNetwork({
      ...socialNetwork,
      tiktok: `tiktok.com/${event.target.value}`,
    })
  }
  const handleChangeSnapChat = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSocialNetwork({ ...socialNetwork, snapchat: event.target.value })
  }
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.paper}
      >
        <Grid container item justify="space-between" xs={12} sm={4}>
          <div className={classes.titleSocialNetwork}>
            <LanguageIcon className={classes.icon} />
            <Typography className={classes.text} variant="h6">
              Website
            </Typography>
          </div>

          <Typography className={classes.text} variant="caption">
            https://
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={8} className={classes.containerInput}>
          <TextField
            variant="outlined"
            color="primary"
            label="Website"
            fullWidth
            className={classes.inputProfile}
            onChange={handleChangeWeb}
            value={socialNetwork.web}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.paper}
      >
        <Grid container item alignItems="center" xs={12} sm={3}>
          <Discord className={classes.icon2} />
          <Typography className={classes.text} variant="h6">
            Discord
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={8} className={classes.containerInput}>
          <TextField
            variant="outlined"
            color="primary"
            label="Discord"
            fullWidth
            className={classes.inputProfile}
            onChange={handleChangeDiscord}
            value={socialNetwork.discord}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.paper}
      >
        <Grid container item xs={12} sm={3}>
          <YouTubeIcon className={classes.icon} />
          <Typography className={classes.text} variant="h6">
            YouTube
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={8} className={classes.containerInput}>
          <TextField
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.inputProfile}
            value={socialNetwork.youtube}
            onChange={handleChangeYT}
            label="YouTube"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.paper}
      >
        <Grid container item xs={12} sm={4}>
          <FacebookIcon className={classes.icon} />
          <Typography className={classes.text} variant="h6">
            Facebook
          </Typography>
          <Typography className={classes.text} variant="caption">
            facebook.com/
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={8} className={classes.containerInput}>
          <TextField
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.inputProfile}
            value={socialNetwork.fb}
            onChange={handleChangeFB}
            label="Facebook"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.paper}
      >
        <Grid container justify="space-between" item xs={12} sm={4}>
          <div className={classes.titleSocialNetwork}>
            <Twitch className={classes.icon2} />
            <Typography className={classes.text} variant="h6">
              Twitch
            </Typography>
          </div>

          <Typography className={classes.text} variant="caption">
            twitch.tv/
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={8} className={classes.containerInput}>
          <TextField
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.inputProfile}
            value={socialNetwork.twitch}
            onChange={handleChangeTwitch}
            label="Twitch"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.paper}
      >
        <Grid container justify="space-between" item xs={12} sm={4}>
          <div className={classes.titleSocialNetwork}>
            <TickTock className={classes.icon2} />
            <Typography className={classes.text} variant="h6">
              TikTok
            </Typography>
          </div>
          <Typography className={classes.text} variant="caption">
            tiktok.com/
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={8} className={classes.containerInput}>
          <TextField
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.inputProfile}
            value={socialNetwork.tiktok}
            onChange={handleChangeTickTock}
            label="TickTock"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.paper}
      >
        <Grid container item xs={12} sm={3}>
          <SnapChat className={classes.icon3} />
          <Typography className={classes.text} variant="h6">
            SnapChat
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={8} className={classes.containerInput}>
          <TextField
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.inputProfile}
            value={socialNetwork.snapchat}
            onChange={handleChangeSnapChat}
            label="Snapchat"
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LinkButton
