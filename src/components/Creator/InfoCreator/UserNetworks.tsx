import React, { useState } from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, Grid, Typography, Tooltip } from '@material-ui/core'
import { FileCopy } from '@material-ui/icons'
import ETH from '../../../assets/eth.svg'
import { truncateMiddleText } from '../../../Utils/stringUtils'
import { boxShadow, colors } from '../../Styles/Colors'
import LanguageIcon from '@material-ui/icons/Language'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import DiscordIcon from '../../../assets/discord.svg'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import TickTockIcon from '../../../assets/tiktok.svg'
import SnapchatIcon from '../../../assets/snapchat.svg'

const useStyles = makeStyles(Theme => ({
  buttonMenu: {
    fontSize: Theme.typography.fontSize[3],
    '@media (max-width: 576px)': {
      fontSize: Theme.typography.fontSize[1],
    },
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    textTransform: 'lowercase',
  },
  drawer: {
    padding: Theme.spacing(4),
    backgroundColor: Theme.palette.secondary.light,
    borderRadius: Theme.spacing(4),
    lineHeight: '40px',
    heigth: '200px',
    'scrollBar::-webkit-scrollbar': {
      width: '0.4em',
    },
    'scrollBar::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    'scrollBar::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
    '@media (max-width: 576px)': {
      width: '100%',
    },
  },
  icon: {
    width: '20px',
    heigth: '20px',
    fill: Theme.palette.primary.main,
    marginBottom: '-4px',
    marginRight: Theme.spacing(6),
    '&:hover': {
      color: Theme.palette.primary.main,
    },
  },
  icon2: {
    width: '15px',
    heigth: '15px',
    fill: Theme.palette.primary.main,
    '&:hover': {
      color: Theme.palette.primary.main,
    },
  },
  text: {
    fontSize: Theme.spacing(4),
  },
  buttonKeyPublic: {
    marginLeft: Theme.spacing(4),
    backgroundColor: 'none',
    '&:hover': {
      backgroundColor: Theme.palette.secondary.main,
      transform: 'none',
      boxShadow: boxShadow.boxShadow1,
    },
    '@media (max-width: 576px)': {
      left: Theme.spacing(0),
    },
  },
  iconCopy: {
    fill: colors.IslamicGreen,
  },
  web: {
    display: ({ web }) => (web !== null && web !== '' ? 'block' : 'none'),
  },
  ig: { display: ({ ig }) => (ig !== null && ig !== '' ? 'block' : 'none') },
  Tw: { display: ({ tw }) => (tw !== null && tw !== '' ? 'block' : 'none') },
  discord: {
    display: ({ discord }) =>
      discord !== null && discord !== '' ? 'block' : 'none',
  },
  youtube: {
    display: ({ youtube }) =>
      youtube !== null && youtube !== '' ? 'block' : 'none',
  },
  facebook: {
    display: ({ facebook }) =>
      facebook !== null && facebook !== '' ? 'block' : 'none',
  },
  tiktok: {
    display: ({ tiktok }) =>
      tiktok !== null && tiktok !== '' ? 'block' : 'none',
  },
  snapchat: {
    display: ({ snapchat }) =>
      snapchat !== null && snapchat !== '' ? 'block' : 'none',
  },
  prueba: {
    display: 'none',
  },
}))

const UserNetworks = ({
  publicKey,
  web,
  ig,
  tw,
  discord,
  discordId,
  youtube,
  facebook,
  tiktok,
  snapchat,
}) => {
  const classes = useStyles({
    web,
    ig,
    tw,
    discord,
    discordId,
    youtube,
    facebook,
    tiktok,
    snapchat,
  })
  const [isCopy, setIsCopy] = useState(false)

  const getPublicKey = () => {
    navigator.clipboard.writeText(publicKey)
    setIsCopy(true)
    setTimeout(() => {
      setIsCopy(false)
    }, 3000)
  }

  return (
    <Grid
      container
      direction="column"
      justify="flex-end"
      className={classes.drawer}
    >
      <Grid container direction="column">
        <Grid
          container
          direction="row"
          item
          justify="flex-start"
          alignItems="center"
          alignContent="center"
        >
          <Link
            to={`https://etherscan.io/address/${publicKey}`}
            className={classes.link}
          >
            <Grid container alignItems="center">
              <ETH className={classes.icon} />

              <Typography
                variant="overline"
                color="primary"
                noWrap
                className={classes.link}
              >
                {truncateMiddleText(publicKey, 8)}
              </Typography>
            </Grid>
          </Link>
          <IconButton
            onClick={getPublicKey}
            className={classes.buttonKeyPublic}
          >
            <Tooltip
              title={isCopy ? 'Copied successfully' : 'Copy Address'}
              placement="top"
            >
              <FileCopy className={isCopy ? classes.iconCopy : null} />
            </Tooltip>
          </IconButton>
        </Grid>
        <Grid className={classes.web}>
          <Link to={`https://${web}`} className={classes.link}>
            <LanguageIcon className={classes.icon} />
            <Typography
              variant="overline"
              color="primary"
              className={web ? classes.link : classes.web}
            >
              {web}
            </Typography>
          </Link>
        </Grid>
        <Grid container direction="column">
          <Grid className={classes.Tw}>
            <Link to={`https://twitter.com/${tw}`} className={classes.link}>
              <TwitterIcon className={classes.icon} />
              <Typography
                variant="overline"
                color="primary"
                className={classes.link}
              >
                {tw}
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid className={classes.ig}>
          <Link to={`https://www.instagram.com/${ig}`} className={classes.link}>
            <InstagramIcon className={classes.icon} />
            <Typography
              variant="overline"
              color="primary"
              className={classes.link}
            >
              {ig}
            </Typography>
          </Link>
        </Grid>
        <Grid className={classes.discord}>
          <Link to={`https://discord.com/`} className={classes.link}>
            <DiscordIcon className={classes.icon2} />
            <Typography
              variant="overline"
              color="primary"
              className={discord ? classes.link : classes.discord}
            >
              {`${discord}#${discordId}`}
            </Typography>
          </Link>
        </Grid>
        <Grid className={classes.youtube}>
          <Link
            to={`https://www.youtube.com/channel/${youtube}`}
            className={classes.link}
          >
            <YouTubeIcon className={classes.icon} />
            <Typography
              variant="overline"
              color="primary"
              className={youtube ? classes.link : classes.youtube}
            >
              {youtube}
            </Typography>
          </Link>
        </Grid>
        <Grid className={classes.facebook}>
          <Link
            to={`https://www.facebook.com/${facebook}`}
            className={classes.link}
          >
            <FacebookIcon className={classes.icon} />
            <Typography
              variant="overline"
              color="primary"
              className={facebook ? classes.link : classes.facebook}
            >
              {facebook}
            </Typography>
          </Link>
        </Grid>

        <Grid className={classes.tiktok}>
          <Link to={`https://tiktok.com/@${tiktok}`} className={classes.link}>
            <TickTockIcon className={classes.icon} />
            <Typography
              variant="overline"
              color="primary"
              className={tiktok ? classes.link : classes.tiktok}
            >
              {tiktok}
            </Typography>
          </Link>
        </Grid>

        <Grid className={classes.snapchat}>
          <Link
            to={`https://www.snapchat.com/add/${snapchat}`}
            className={classes.link}
          >
            <SnapchatIcon className={classes.icon} />
            <Typography
              variant="overline"
              color="primary"
              className={snapchat ? classes.link : classes.snapchat}
            >
              {snapchat}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UserNetworks
