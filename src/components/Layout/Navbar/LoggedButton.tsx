import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'
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
import { MetamaskAccountType } from '../../../types'
import { backgroundGradient } from '../../Styles/Colors'
import { myProfilePathFromAddress } from '../../../config/routes'

import { boxShadow } from '../../Styles/Colors'

const { boxShadow1 } = boxShadow

const useStyles = makeStyles(theme => ({
  paper: {
    width: `${theme.spacing(4)}vw`,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: `0 0 ${theme.spacing(5)}px ${theme.spacing(5)}px`,
  },
  button: {
    width: `${theme.spacing(4)}vw`,
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0px 3px 7px #212e36',
    boxShadow: boxShadow1,
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
    '@media (max-width: 1270px)': {
      width: '100%',
    },
  },
  menuList: {
    marginTop: -theme.spacing(2),
    paddingTop: theme.spacing(4),
  },
  menuItem: {
    justifyContent: 'center',
    color: theme.palette.primary.main,
    textDecoration: 'none',
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
  popper: { zIndex: 4 },
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

const menu = [
  {
    name: 'My Profile',
    link: address => myProfilePathFromAddress(address),
  },
  {
    name: `Playlist`,
    link: address => `/construction`,
  },
  {
    name: `Favorites`,
    link: address => `/construction`,
  },
  {
    name: `Bids`,
    link: address => `/construction`,
  },
  {
    name: `Settings`,
    link: address => `/editProfile`,
  },
]

const LoggedButton = ({ profileImageUrl, name, account, onLogOut }: Props) => {
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
        variant="contained"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        fullWidth
      >
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
          {name ? `@${name}` : `@${account}`}
        </Typography>
        <ArrowDropDownRounded className={classes.icon} color="primary" />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        className={classes.popper}
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
                    <Link to={item.link(account)} className={classes.menuItem}>
                      <MenuItem className={classes.menuItem}>
                        {item.name}
                      </MenuItem>
                    </Link>
                  ))}
                  <MenuItem className={classes.menuItem} onClick={onLogOut}>
                    Log Out
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

type Props = {
  profileImageUrl: string
  name: string
  account: MetamaskAccountType
  onLogOut: () => void
}

export default LoggedButton
