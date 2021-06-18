import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import { colors, boxShadow } from './Styles/Colors'
import { Theme, darkTheme } from './Styles'

const useStyle = makeStyles(Theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 10,
    right: 10,
    width: '18px',
    backgroundColor: colors.White,
    boxShadow: boxShadow.boxShadow8,
    borderRadius: '60px',
    '&:focus': {
      backgroundColor: colors.DarkGrey,
    },
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

const ButtonDM = ({ theme, setTheme }) => {
  const classes = useStyle()
  const toggleTheme = () => {
    if (theme === Theme) {
      setTheme(darkTheme)
    } else {
      setTheme(Theme)
    }
  }
  return (
    <Button onClick={toggleTheme} className={classes.root} variant="contained">
      <WbIncandescentIcon className={classes.icon} />
    </Button>
  )
}

export default ButtonDM
