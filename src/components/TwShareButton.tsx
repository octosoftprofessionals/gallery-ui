import React from 'react'
import { Link } from 'gatsby'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyle = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(4),
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: Theme.typography.fontSize[4],
    color: Theme.palette.primary.main,
    fontFamily: 'Bai Jamjuree',
    marginLeft: Theme.spacing(4),
  },
  icon: {
    fontSize: Theme.typography.fontSize[10],
    color: Theme.palette.primary.main,
  },
  link: { textDecoration: 'none' },
}))

const TwShareButton = ({ linkTwitter }) => {
  const classes = useStyle()
  return (
    <Link to={linkTwitter} className={classes.link}>
      <Button className={classes.root}>
        <TwitterIcon className={classes.icon} />
        <Typography className={classes.text}>Tweet</Typography>
      </Button>
    </Link>
  )
}

export default TwShareButton
