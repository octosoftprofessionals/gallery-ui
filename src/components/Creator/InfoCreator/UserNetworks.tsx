import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import LanguageIcon from '@material-ui/icons/Language'
import ETH from '../../../assets/eth.svg'
import { truncateMiddleText } from '../../../Utils/stringUtils'

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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawer: {
    padding: Theme.spacing(4),
    backgroundColor: '#212e36',
    borderRadius: Theme.spacing(4),
    lineHeight: '40px',
    '@media (max-width: 576px)': {
      width: '100%',
    },
  },
  icon: {
    width: '20px',
    heigth: '20px',
    fill: Theme.palette.primary.main,

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
    marginLeft: Theme.spacing(4),
    fontSize: Theme.spacing(4),
  },
}))

const UserNetworks = ({
  publicKey,
  web,
  ig,
  tw,
  discord,
  youtube,
  facebook,
  tiktok,
  snapchat,
}) => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      justify="flex-end"
      className={classes.drawer}
    >
      <Grid container direction="column">
        <Link
          to={`https://etherscan.io/address/${publicKey}`}
          className={classes.link}
        >
          <ETH className={classes.icon2} />

          <Typography
            variant="overline"
            color="secondary"
            noWrap
            className={classes.text}
          >
            {truncateMiddleText(publicKey)}
          </Typography>
        </Link>
        <Link to={`https://twitter.com/${tw}`} className={classes.link}>
          <TwitterIcon className={classes.icon} />,
          <Typography
            variant="overline"
            color="secondary"
            className={classes.text}
          >
            {tw}
          </Typography>
        </Link>
        <Link to={`https://www.instagram.com/${ig}`} className={classes.link}>
          <InstagramIcon className={classes.icon} />,
          <Typography
            variant="overline"
            color="secondary"
            className={classes.text}
          >
            {ig}
          </Typography>
        </Link>

        <Link to={web} className={classes.link}>
          <LanguageIcon className={classes.icon} />,
          <Typography
            variant="overline"
            color="secondary"
            className={classes.text}
          >
            {web}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  )
}

export default UserNetworks
