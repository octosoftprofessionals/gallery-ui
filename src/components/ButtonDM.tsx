import React from 'react'
import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import { colors } from './Styles/Colors'
import { Theme, darkTheme } from './Styles'

const useStyle = makeStyles(Theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 10,
    right: 10,
  },
  icon: {
    fontSize: Theme.spacing(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.Aqua,
  },
}))

const ButtonDM = ({ theme, setTheme }) => {
  const classes = useStyle()

  /*   const toggleTheme = () => {
    setTheme(!theme)
  } */
  return (
    <IconButton
      /* onClick={toggleTheme} */ className={classes.root}
      color="primary"
    >
      <WbIncandescentIcon className={classes.icon} />
    </IconButton>
  )
}

export default ButtonDM
