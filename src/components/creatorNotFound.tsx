import React from 'react'

import Layout from './Layout'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(Theme => ({
  text: {
    color: '#00FFFF',
    textAlign: 'center',
  },
}))

const UserNotFound = () => {
  const classes = useStyles()
  return (
    <Layout>
      <h1 className={classes.text}>
        This user does not have a octosoft account yet!
      </h1>
    </Layout>
  )
}

export default UserNotFound
