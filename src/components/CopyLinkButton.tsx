import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinkIcon from '@material-ui/icons/Link'

const useStyle = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(4),
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: Theme.typography.fontSize[3],
    color: Theme.palette.primary.main,
    fontFamily: 'Bai Jamjuree',
    marginLeft: Theme.spacing(4),
  },
  icon: {
    fontSize: Theme.spacing(10),
    color: Theme.palette.primary.main,
  },
}))

const LinkButton = ({ onClick }) => {
  const classes = useStyle()
  return (
    <Button onClick={onClick} className={classes.root}>
      <LinkIcon className={classes.icon} />
      <Typography className={classes.text}>Copy Link</Typography>
    </Button>
  )
}

export default LinkButton
