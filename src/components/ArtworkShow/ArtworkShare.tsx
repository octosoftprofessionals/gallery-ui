import React, { useState } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import TwShareButton from '../../components/TwShareButton'
import CopyLinkButton from '../CopyLinkButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ReportButton from '../ReportButton'
import { boxShadow } from '../Styles/Colors'

const useStyle = makeStyles(Theme => ({
  root: {
    backgroundColor: Theme.palette.secondary.main,
    padding: Theme.spacing(1),
    borderRadius: Theme.spacing(2),
    position: 'absolute',
    top: -120,
    right: 0,
  },
  report: {
    backgroundColor: Theme.palette.secondary.main,
    position: 'absolute',
    padding: Theme.spacing(2),
    width: 130,
    borderRadius: Theme.spacing(2),
    top: '-50px',
    left: -60,
  },
  container: {
    position: 'absolute',
    top: '-28px',
    right: ({ right }) => (right ? right : 'auto'),
  },
  button: {
    backgroundColor: Theme.palette.secondary.main,
    borderRadius: Theme.spacing(9),
    transition: '0.3s all linear',
    width: 'auto',
    position: 'relative',
    boxShadow: boxShadow.boxShadow1,
    '&:hover': {
      boxShadow: boxShadow.boxShadow5,
      transform: 'translateY(-2px)',
      backgroundColor: Theme.palette.secondary.main,
    },
  },
  buttonReport: {
    backgroundColor: Theme.palette.secondary.main,
    transition: '0.3s all linear',
    borderRadius: '50%',
    minWidth: 50,
    height: 50,
    padding: 0,
    position: 'relative',
    boxShadow: boxShadow.boxShadow1,
    '&:hover': {
      boxShadow: boxShadow.boxShadow5,
      transform: 'translateY(-2px)',
      backgroundColor: Theme.palette.secondary.main,
    },
  },
  text: {
    fontFamily: 'Bai Jamjuree',
    color: Theme.palette.primary.main,
    marginLeft: Theme.spacing(4),
  },
  icon: {
    fontSize: Theme.typography.fontSize[10],
    color: Theme.palette.primary.main,
  },
}))

const ArtworkShare = ({ linkTwitter, setDisplayReportModal, right }) => {
  const [showButtons, setShowButtons] = useState(false)
  const [showReport, setShowReport] = useState(false)

  const classes = useStyle({ right })

  const displayButtons = e => {
    e.preventDefault()
    setShowButtons(!showButtons)
    setShowReport(false)
  }

  const displayReport = e => {
    e.preventDefault()
    setShowReport(!showReport)
    setShowButtons(false)
  }

  const getUrl = () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    return navigator.clipboard.writeText(url)
  }

  return (
    <Grid
      item
      direction="column"
      justify="flex-end"
      alignItems="flex-end"
      className={classes.container}
    >
      {showButtons ? (
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          className={classes.root}
          spacing={2}
        >
          <TwShareButton linkTwitter={linkTwitter} />
          <CopyLinkButton onClick={getUrl} />
        </Grid>
      ) : null}
      {showReport ? (
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          className={classes.report}
          spacing={2}
          xs={12}
        >
          <ReportButton onClick={setDisplayReportModal} />
        </Grid>
      ) : null}
      <Grid item direction="row" justify="center">
        <Button onClick={displayReport} className={classes.buttonReport}>
          <MoreHorizIcon className={classes.icon} />
        </Button>
        <Button onClick={displayButtons} className={classes.button}>
          <ArrowUpwardIcon className={classes.icon} />
          <Typography className={classes.text}>Share</Typography>
        </Button>
      </Grid>
    </Grid>
  )
}

export default ArtworkShare
