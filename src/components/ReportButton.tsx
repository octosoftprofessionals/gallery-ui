import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BlockIcon from '@material-ui/icons/Block'

const useStyle = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(3),
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: Theme.typography.fontSize[9.5],
    color: Theme.palette.error.dark,
    fontFamily: 'Bai Jamjuree',
    marginLeft: Theme.spacing(4),
  },
  icon: {
    fontSize: Theme.spacing(9),
    color: Theme.palette.error.dark,
  },
}))

const ReportButton = ({ onClick }) => {
  const classes = useStyle()

  return (
    <Button className={classes.root} onClick={onClick(true)}>
      <BlockIcon className={classes.icon} />
      <Typography className={classes.text}>Report</Typography>
    </Button>
  )
}

export default ReportButton
