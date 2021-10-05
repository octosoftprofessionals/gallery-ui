import React, { useState } from 'react'

import { Grid, Typography, Button, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MoreHoriz, ArrowUpward } from '@material-ui/icons'

import { profilePathFromAddress } from '../../../../config/routes'

import { boxShadow } from '../../../Styles/Colors'

import PopoverTwitter from './PopoverTwitter'
import PopoverReport from './PopoverReport'

const useStyle = makeStyles(Theme => ({
  root: {
    backgroundColor: Theme.palette.secondary.main,
    padding: Theme.spacing(1),
    borderRadius: Theme.spacing(2),
    right: 0,
  },
  report: {
    backgroundColor: Theme.palette.secondary.main,
    position: 'absolute',
    padding: Theme.spacing(2),
    width: 130,
    borderRadius: Theme.spacing(2),
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
      backgroundColor: Theme.palette.secondary.main,
      transition: '0.3s all linear',
      borderRadius: Theme.shape.borderRadius[3],
      minWidth: 50,
      height: 50,
      padding: 0,
      position: 'relative',
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

const Share = ({
  linkTwitter,
  setDisplayReportModal,
  right,
  isMyAccount = false,
  publicKey,
}: {
  linkTwitter: string
  setDisplayReportModal: React.Dispatch<React.SetStateAction<boolean>>
  right: string
  isMyAccount?: boolean
  publicKey?: string
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

  const [anchorEl, setAnchorEl] = useState<any>(null)
  const [anchorElReport, setAnchorElReport] = useState<any>(null)

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

  const getUrl = () => {
    const url =
      typeof window !== 'undefined'
        ? isMyAccount
          ? window.location.origin + profilePathFromAddress(publicKey)
          : window.location.href
        : ''
    return navigator.clipboard.writeText(url)
  }

  return (
    <Grid item direction="column" justify="flex-end" alignItems="flex-end">
      {
        <PopoverTwitter
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          getUrl={getUrl}
          handleClose={handleClose}
          linkTwitter={linkTwitter}
        />
      }
      {
        <PopoverReport
          openReport={Boolean(anchorElReport)}
          anchorElReport={anchorElReport}
          handleCloseReport={handleCloseReport}
          setDisplayModal={setDisplayReportModal}
        />
      }
      <Grid item direction="row" justify="center">
        {!isMyAccount ? (
          <Button onClick={handleClickReport} className={classes.buttonReport}>
            <MoreHoriz className={classes.icon} />
          </Button>
        ) : null}
        <Button onClick={handleClick} className={classes.button}>
          <ArrowUpward className={classes.icon} />
          <Hidden xsDown>
            <Typography className={classes.text}>Share</Typography>
          </Hidden>
        </Button>
      </Grid>
    </Grid>
  )
}

export default Share
