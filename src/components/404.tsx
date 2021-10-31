import React from 'react'

import Layout from '../components/Layout'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(Theme => ({
  text: {
    color: Theme.palette.secondary.main,
    textAlign: 'center',
  },
}))

const NotFound = () => {
  const classes = useStyles()
  return (
    <Layout>
      <h1 className={classes.text}>404 Not Found</h1>
    </Layout>
  )
}

export default NotFound
