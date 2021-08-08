import React from 'react'
import { Grid, Typography, TextField, InputAdornment } from '@material-ui/core'
import { AlternateEmail } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import LanguageIcon from '@material-ui/icons/Language'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import DiscordIcon from '../../assets/discord.svg'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import TickTockIcon from '../../assets/tiktok.svg'
import SnapchatIcon from '../../assets/snapchat.svg'

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
    padding: theme.spacing(10),
    borderRadius: theme.spacing(6),
    backgroundColor: '#FFFFFF1A',
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
    fontSize: theme.spacing(10),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  icon2: {
    width: '32px',
    heigth: '32px',
    fill: theme.palette.primary.main,
  },
  icon3: {
    width: 32,
    heigth: 32,
    fill: theme.palette.primary.main,
    marginTop: 0,
    padding: 0,
  },
  iconSVG: {
    width: 32,
    height: 32,
    fill: theme.palette.primary.main,
  },
  text: {
    fontSize: theme.spacing(5),
    marginLeft: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  extraText: {
    margin: theme.spacing(0, 2),
    color: theme.palette.primary.dark,
    fontSize: 30,
    fontWeight: 800,
  },
  grid: {
    margin: 0,
    color: theme.palette.primary.main,
  },
  containerInput: {
    paddingLeft: theme.spacing(2),
  },
  inputProfileDiscord: {
    '@global': {
      '.MuiOutlinedInput-root': {
        borderRadius: 50,
        padding: theme.spacing(1, 0),
        border: `1px solid ${theme.palette.primary.dark}`,
        width: 190,
      },
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
  titleSocialNetwork: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconMail: {
    color: theme.palette.primary.dark,
    marginLeft: theme.spacing(2),
    fontSize: theme.spacing(9),
  },
}))

const LinkButton = ({ socialNetwork, setSocialNetwork }) => {
  const classes = useStyles()

  const handleChange = (key: string, value: string) => {
    setSocialNetwork({ ...socialNetwork, [key]: value })
  }

  const networks = [
    {
      key: 'website',
      name: 'Website',
      icon: <LanguageIcon className={classes.icon} />,
    },
    {
      key: 'twitter',
      name: 'Twitter',
      icon: <TwitterIcon className={classes.icon} />,
    },
    {
      key: 'instagram',
      name: 'Instagram',
      icon: <InstagramIcon className={classes.icon} />,
    },
    {
      key: 'discord',
      name: 'Discord',
      icon: <DiscordIcon className={classes.icon2} />,
    },
    {
      key: 'youtube',
      name: 'YouTube',
      icon: <YouTubeIcon className={classes.icon} />,
    },
    {
      key: 'facebook',
      name: 'Facebook',
      icon: <FacebookIcon className={classes.icon} />,
    },
    {
      key: 'tiktok',
      name: 'TikTok',
      icon: <TickTockIcon className={classes.icon2} />,
    },
    {
      key: 'snapchat',
      name: 'Snapchat',
      icon: <SnapchatIcon className={classes.icon2} />,
    },
  ]

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      {networks.map(network => (
        <Grid
          container
          direction="row"
          justify="space-between"
          className={classes.paper}
          key={network.key}
        >
          <Grid container item justify="space-between" xs={12} md={6}>
            <div className={classes.titleSocialNetwork}>
              {network.icon}
              <Typography className={classes.text} variant="h6">
                {network.name}
              </Typography>
            </div>
          </Grid>
          {network.key === 'discord' ? (
            <Grid
              item
              xs={12}
              md={6}
              container
              justify="space-between"
              alignItems="center"
              className={classes.containerInput}
              fullWidth
            >
              <TextField
                variant="outlined"
                color="primary"
                className={classes.inputProfileDiscord}
                onChange={e => handleChange(network.key, e.currentTarget.value)}
                value={socialNetwork.web}
              />
              <Typography className={classes.extraText} variant="h6">
                #
              </Typography>
              <TextField
                variant="outlined"
                color="primary"
                className={classes.inputProfileDiscord}
                onChange={e => handleChange(network.key, e.currentTarget.value)}
                value={socialNetwork.web}
              />
            </Grid>
          ) : (
            <Grid
              item
              xs={12}
              md={6}
              className={classes.containerInput}
              fullWidth
            >
              <TextField
                variant="outlined"
                color="primary"
                fullWidth
                InputProps={
                  network.key === 'tiktok' || network.key === 'snapchat'
                    ? {
                        startAdornment: (
                          <InputAdornment position="start">
                            <AlternateEmail className={classes.iconMail} />
                          </InputAdornment>
                        ),
                      }
                    : null
                }
                className={classes.inputProfile}
                onChange={e => handleChange(network.key, e.currentTarget.value)}
                value={socialNetwork.web}
              />
            </Grid>
          )}
        </Grid>
      ))}
    </Grid>
  )
}

export default LinkButton
