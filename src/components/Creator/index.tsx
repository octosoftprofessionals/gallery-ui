import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Typography } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  root: {},
}))

const Creator = () => {
  const classes = useStyle()
  return (
    <div>
      <div>hola</div>
      <div>chehe</div>
    </div>
  )
}

export default Creator
