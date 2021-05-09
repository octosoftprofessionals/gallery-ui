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
} from '@material-ui/core'

const { boxShadow1 } = boxShadow

const useStyles = makeStyles(Theme => ({
  root: { padding: Theme.spacing(11, 0, 0) },
  img: {
    background: `url(${logoSrc})`,
    paddingBottom: Theme.spacing(14),
    '@media (max-width: 755px)': { paddingBottom: Theme.spacing(13) },
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  button: { boxShadow: boxShadow1, padding: Theme.spacing(4, 9) },
  buttonCreate: { background: backgroundGradient.backgroundGradient1 },
  buttonBox: {
    width: `${Theme.spacing(13)}%`,
    padding: Theme.spacing(2, 9),
    backgroundColor: Theme.palette.secondary.main,
    '&:hover': { backgroundColor: Theme.palette.secondary.main },
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
  avatar: {},
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
}))

const index = ({ pathname, cois, publicKey, profileImageUrl, name }) => {
  const classes = useStyles({ logoSrc })
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className={classes.root}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={1}>
            <Link to="/" className={classes.link}>
              <div className={classes.img} />
            </Link>
          </Grid>
          <Grid
            item
            xs={4}
            container
            justify="space-around"
            alignItems="center"
          >
            <Typography variant="button">Bids</Typography>
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
              <Grid
                item
                xs={10}
                container
                direction="column"
                alignItems="center"
              >
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
                <Avatar
                  alt={name}
                  src={profileImageUrl}
                  className={classes.avatar}
                />
              </Badge>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default withWidth()(index)
