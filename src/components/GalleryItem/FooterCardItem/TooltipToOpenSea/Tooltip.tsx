import React, { useState } from 'react'
// import Tooltip from '@mui/material/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button, Tooltip } from '@material-ui/core'
import { OpenInNewOutlined } from '@material-ui/icons'

import { colors } from '../../../Styles/Colors'

const useStyle = makeStyles(Theme => ({
  btnText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: colors.Black,
    '&:hover': {
      transform: 'none',
      color: Theme.palette.text.secondary,
    },
    fontSize: Theme.typography.fontSize[10],
    margin: '5px',
    height: '100%',
    width: '80%',
  },
  btn: {
    position: 'relative',
    height: Theme.spacing(2),
    margin: Theme.spacing(4, 0, 0),
    padding: '34px 24px 11px 24px',
    '&:hover': {
      transform: 'none',
      color: Theme.palette.text.secondary,
    },
  },
  icon: {
    fontSize: Theme.spacing(8),
    color: colors.Black,
    '&:hover': {
      color: Theme.palette.text.secondary,
    },
    // marginTop: Theme.spacing(1),
  },
}))

const TooltipToOpenSea = () => {
  const classes = useStyle()

  return (
    <Grid container item md={12} justifyContent="center">
      <Tooltip
        placement="top"
        disableFocusListener
        disableTouchListener
        title="This button will redirect to Opensea.io website"
      >
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          className={classes.btn}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="button" className={classes.btnText}>
              Check this art out
              <OpenInNewOutlined className={classes.icon} />
            </Typography>
          </Grid>
        </Button>
      </Tooltip>
    </Grid>
  )
}

export default TooltipToOpenSea
