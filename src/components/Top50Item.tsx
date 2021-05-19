import React from 'react'
import { Grid, Avatar, Typography, Link, Button } from '@material-ui/core'
import { Twitter } from '@material-ui/icons'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { makeStyles } from '@material-ui/core/styles'
import Verified from '../assets/verified.svg'

const useStyles = makeStyles(Theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: Theme.spacing(2),
  },
  top: {
    backgroundColor: Theme.palette.primary.main,
    color: Theme.palette.secondary.main,
    width: 30,
    height: 30,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: Theme.typography.fontSize[10],
    height: Theme.typography.fontSize[10],
    fill: Theme.palette.primary.main,
  },
  followers: {
    fontSize: Theme.typography.fontSize[9],
    fontFamily: Theme.typography.fontFamily[5],
    color: Theme.palette.primary.main,
    margin: Theme.spacing(2, 0, 0, 0),
  },
  followersContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: Theme.spacing(0, 0, 0, 6),
  },
  avatar: {
    width: 70,
    height: 70,
    margin: Theme.spacing(0, 0, 0, 6),
  },
  iconVerified: { display: 'block' },
  iconArrow: {
    width: Theme.typography.fontSize[10],
    height: Theme.typography.fontSize[10],
    fill: Theme.palette.primary.main,
    padding: 0,
    margin: 0,
  },
  button: { '&:hover': { backgroundColor: Theme.palette.secondary.main } },
  buttonIcon: {
    width: 55,
    height: 55,
    border: `2px solid`,
    borderColor: Theme.palette.text.secondary,
  },
  textButton: {
    fontSize: Theme.typography.fontSize[9],
    fontFamily: Theme.typography.fontFamily[2],
  },
  textCreator: {
    fontSize: Theme.typography.fontSize[10],
    fontFamily: Theme.typography.fontFamily[4],
    color: Theme.palette.primary.main,
    fontWeight: 800,
  },
  creator: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: Theme.spacing(4),
  },
  creatorContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}))

const Top50Item = ({
  name,
  imgUrl,
  username,
  twitter,
  topNumber,
  followers,
}) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.creatorContainer}>
        <Typography className={classes.top} variant="body1">
          {topNumber}
        </Typography>

        <div className={classes.creatorContainer}>
          <Avatar alt={name} src={imgUrl} className={classes.avatar} />
          <div className={classes.creator}>
            <Typography variant="body1" className={classes.textCreator}>
              {name}
            </Typography>
            <Link
              underline="none"
              variant="subtitle2"
              href={`/creator?id=${username}`}
            >{`@${username}`}</Link>
          </div>
        </div>
      </Grid>
      <Grid item className={classes.creatorContainer}>
        <Link href={'/'} underline="none">
          <Button
            variant="text"
            color="secondary"
            startIcon={<Verified className={classes.iconVerified} />}
            endIcon={<Twitter fontSize="small" className={classes.icon} />}
            className={classes.button}
          >
            <Typography
              variant="caption"
              color="primary"
              className={classes.textButton}
            >
              {`@${twitter}`}
            </Typography>
          </Button>
        </Link>
        <div className={classes.followersContainer}>
          <Button className={classes.buttonIcon}>
            <ArrowUpwardIcon className={classes.iconArrow} />
          </Button>
          <Typography className={classes.followers}>{followers}</Typography>
        </div>
      </Grid>
    </Grid>
  )
}

export default Top50Item
