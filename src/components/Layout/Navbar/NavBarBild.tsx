import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'

import logoSrc from '../../../assets/logoNew.png'
import { boxShadow, backgroundGradient } from '../../Styles/Colors'

import {
  AppBar,
  Avatar,
  Button,
  Badge,
  Grid,
  Toolbar,
  Typography,
  withWidth,
  Hidden,
} from '@material-ui/core'

const { boxShadow1 } = boxShadow

const useStyles = makeStyles(Theme => ({
  button: {
    boxShadow: boxShadow1,
    padding: Theme.spacing(4, 9),
    '@media (max-width: 755px)': { padding: Theme.spacing(2, 6) },
  },
  buttonCreate: { background: backgroundGradient.backgroundGradient1 },
  buttonBox: {
    width: `${Theme.spacing(13)}%`,
    padding: Theme.spacing(2, 9),
    backgroundColor: Theme.palette.secondary.main,
    '&:hover': { backgroundColor: Theme.palette.secondary.main },
    '@media (max-width: 755px)': { width: `${Theme.spacing(13)}vh` },
  },
  coins: { fontSize: Theme.typography.fontSize[3] },
  keyPublic: {
    zIndex: 999,
    fontSize: Theme.typography.fontSize[9],
    fontFamily: Theme.typography.fontFamily[1],
    lineHeight: 1,
    textOverflow: 'ellipsis',
    textTransform: 'none',
    overflow: 'hidden',
    width: `${Theme.spacing(14)}%`,
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
}))

const index = ({ cois, publicKey, profileImageUrl, name }) => {
  const classes = useStyles({ logoSrc })
  return (
    <Grid
      item
      xs={10}
      sm={9}
      md={5}
      lg={4}
      container
      justify="space-around"
      alignItems="center"
    >
      <Hidden xsDown>
        <Typography variant="button">Bids</Typography>
      </Hidden>
      <Button
        variant="contained"
        className={[classes.buttonCreate, classes.button]}
      >
        <Typography variant="button">Create</Typography>
      </Button>
      <Button
        variant="contained"
        className={[classes.button, classes.buttonBox]}
      >
        <Grid item xs={10} container direction="column" alignItems="center">
          <Typography
            variant="button"
            color="primary"
            className={classes.coins}
          >
            {`${cois} ETH`}
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            className={classes.keyPublic}
          >
            {publicKey}
          </Typography>
        </Grid>
        <Badge
          badgeContent=""
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Avatar alt={name} src={profileImageUrl} className={classes.avatar} />
        </Badge>
      </Button>
    </Grid>
  )
}

export default withWidth()(index)
