import React from 'react'

import { Button, Avatar, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import { backgroundGradient } from '../../../Styles/Colors'

const useStyles = makeStyles(theme => ({
  button: {
    width: `${theme.spacing(4)}vw`,
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0px 3px 7px #212e36',
    padding: theme.spacing(3, 5),
    borderRadius: theme.spacing(5),
    zIndex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      transition: 'none',
      transform: 'none',
      border: 'none',
    },
    '@media (max-width: 1270px)': {
      width: '100%',
    },
  },
  name: {
    marginLeft: theme.spacing(2),
    fontWeight: 400,
    paddingLeft: theme.spacing(2),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  icon: {
    fontSize: theme.spacing(10),
  },
  profileColor: {
    color: '#FFF',
    background: backgroundGradient.backgroundGradient1,
  },
  textKeyPublic: {
    fontWeight: 400,
    paddingLeft: theme.spacing(2),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
}))

const ButtonUser = ({
  profileImageUrl,
  name,
  account,
}: {
  profileImageUrl: string
  name: string
  account: string
}) => {
  const classes = useStyles()
  return (
    <Button className={classes.button} variant="contained" disabled fullWidth>
      {profileImageUrl ? (
        <Avatar alt={name} src={profileImageUrl} />
      ) : (
        <Avatar alt={name} className={classes.profileColor}>
          {' '}
        </Avatar>
      )}

      <Typography
        className={name ? classes.name : classes.textKeyPublic}
        variant="body1"
      >
        {name ? `@${name}` : `${account}`}
      </Typography>
    </Button>
  )
}

export default ButtonUser
