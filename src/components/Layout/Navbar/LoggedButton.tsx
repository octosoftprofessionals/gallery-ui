import React, { useState, useRef, useEffect } from 'react'
import {
  Button,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Grow,
  ClickAwayListener,
  Avatar,
  Typography,
} from '@material-ui/core'
import { ArrowDropDownRounded } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {},
  paper: {
    width: `${theme.spacing(4)}vw`,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: `0 0 ${theme.spacing(5)}px ${theme.spacing(5)}px`,
  },
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
      boxShadow: 'none',
    },
  },
  menuList: {
    marginTop: -theme.spacing(3),
    zIndex: 1,
    paddingTop: theme.spacing(4),
  },
  menuItem: {
    justifyContent: 'center',
  },
  name: {
    marginLeft: theme.spacing(2),
  },
  icon: {
    fontSize: theme.spacing(10),
  },
}))

const menu = ['My Profile', 'Playlist', 'Favorites', 'Bids', 'Log-Out']

const LoggedButton = ({ profileImageUrl, name }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }
    prevOpen.current = open
  }, [open])

  return (
    <>
      <Button
        className={classes.button}
        variant="containedSecondary"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar alt={name} src={profileImageUrl} />
        <Typography
          className={classes.name}
          variant="body1"
        >{`@${name}`}</Typography>
        <ArrowDropDownRounded className={classes.icon} color="primary" />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className={classes.menuList}
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {menu.map(item => (
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default LoggedButton
