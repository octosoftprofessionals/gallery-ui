import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CreatorButton from '../../CreatorButton'
import { userInfo } from '../../../types'

const useStyle = makeStyles(Theme => ({
  container: {
    flexWrap: 'nowrap',
    paddingBottom: 5,
    '@media (max-width: 768px)': {
      alignItems: 'center',
    },
  },
  title: {
    paddingTop: 20,
    '@media (max-width: 768px)': {
      fontSize: Theme.typography.fontSize[4],
    },
  },
}))
const TopHero = ({
  children,
  userInfo,
  title,
}: {
  children: React.ReactNode
  userInfo: userInfo
  title: string
}) => {
  const classes = useStyle()
  const { username, imageUrl, profileUrl } = userInfo
  return (
    <Grid container direction="column" className={classes.container}>
      <CreatorButton
        username={username}
        imageUrl={imageUrl}
        profileUrl={profileUrl}
        top="-32px"
      />
      <Grid item xs={9} sm={12}>
        <Typography variant="h4" color="primary" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      {children}
    </Grid>
  )
}

export default TopHero
