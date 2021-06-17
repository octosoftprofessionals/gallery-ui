import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import { colors } from './Styles/Colors'

const useStyle = makeStyles(Theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 10,
    right: 10,
    width: '20px',
    backgroundColor: colors.White,
    boxShadow: '2px 2px 15px 2px rgb(0 0 0 / 15%)',
    borderRadius: '60px',
    '&:focus': {
      backgroundColor: colors.DarkGrey,
    },
  },
  text: {
    fontSize: Theme.typography.fontSize[9.5],
    color: Theme.palette.primary.main,
    fontFamily: 'Bai Jamjuree',
    marginLeft: Theme.spacing(1),
  },
  icon: {
    fontSize: Theme.spacing(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.Aqua,
    '&:focus': {
      color: colors.White,
    },
  },
}))

const ButtonDM = () => {
  const classes = useStyle()
  const [theme, setTheme] = useState('ligth')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <Button onClick={toggleTheme} className={classes.root} variant="contained">
      <WbIncandescentIcon className={classes.icon} />
    </Button>
  )
}

export default ButtonDM
