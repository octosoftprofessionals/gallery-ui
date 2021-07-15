import React, { useState } from 'react'
import {
  Grid,
  Typography,
  Button,
  withWidth,
  Hidden,
  Popover,
} from '@material-ui/core'
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
    '@media (max-width: 585px)': {
      borderRadius: Theme.shape.borderRadius[3],
      minWidth: 50,
      height: 50,
    },
  },
  buttonReport: {
    backgroundColor: Theme.palette.secondary.main,
    transition: '0.3s all linear',
    borderRadius: Theme.shape.borderRadius[3],
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

const ArtworkShare = ({
  linkTwitter,
  setDisplayReportModal,
  right,
}) => {
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

  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElReport, setAnchorElReport] = useState(null)

  // const [openShare, setOpenShare] = useState(false)
  // const [openReport, setOpenReport] = useState(false)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClickReport = event => {
    setAnchorElReport(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleCloseReport = () => {
    setAnchorElReport(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const openReport = Boolean(anchorElReport)
  const idReport = openReport ? 'simple-popover' : undefined

  return (
    <Grid
      item
      direction="column"
      justify="flex-end"
      alignItems="flex-end"
      className={classes.container}
    >
      {
        <Popover
          open={open}
          onClose={handleClose}
          id={id}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          anchorPosition={{
            top: 200,
            left: 200,
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <TwShareButton linkTwitter={linkTwitter} />
          <CopyLinkButton onClick={getUrl} />
        </Popover>
      }
      {
        <Popover
          open={openReport}
          onClose={handleCloseReport}
          id={idReport}
          anchorEl={anchorElReport}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <ReportButton onClick={setDisplayReportModal} />
        </Popover>
      }
      <Grid item direction="row" justify="center">
        <Button onClick={handleClickReport} className={classes.buttonReport}>
          <MoreHorizIcon className={classes.icon} />
        </Button>
        <Button onClick={handleClick} className={classes.button}>
          <ArrowUpwardIcon className={classes.icon} />
          <Hidden xsDown>
            <Typography className={classes.text}>Share</Typography>
          </Hidden>
        </Button>
      </Grid>
    </Grid>
  )
}

export default withWidth()(ArtworkShare)
