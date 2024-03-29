import React, { useEffect, useState } from 'react'
import Modal from '../../Modal'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tab, Typography } from '@material-ui/core'
import { TabContext, TabPanel, TabList } from '@material-ui/lab'
import FollowItem from './FollowItem'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  tab: {
    backgroundColor: theme.palette.card.header,
    opacity: 1,
    boxShadow: 'none',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    height: theme.spacing(15),
    borderBottom: '1px solid #6666',
    padding: theme.spacing(4, 2, 0, 2),
  },
  text: {
    color: theme.palette.secondary.contrastText,
    fontWeight: 'bold',
    fontSize: theme.typography.fontSize[10],
    marginRight: theme.spacing(1),
    textAlign: 'center',
    marginTop: theme.spacing(10),
  },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
  panel: {
    paddingTop: theme.spacing(17),
  },
  title: {
    textTransform: 'none',
    color: theme.palette.secondary.contrastText,
    fontWeight: 'bold',
    fontSize: theme.typography.fontSize[4],
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
  '@global': {
    '.MuiDialog-paper': {
      minWidth: '700px !important',
      maxHeight: '500px !important',
      minHeight: '250px !important',
      overflowX: 'hidden',
      '@media (max-width: 576px)': {
        minWidth: '320px !important',
        maxHeight: '600px !important',
        minHeight: '400px !important',
        overflowX: 'hidden',
      },
    },
  },
}))

const FollowersModal = ({
  viewModal,
  openFollowModal,
  setOpenFollowModal,
  followers,
  following,
  publicKey,
}) => {
  const classes = useStyles()
  const [value, setValue] = useState(viewModal)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Modal
        showTitle={false}
        open={openFollowModal}
        setOpen={setOpenFollowModal}
      >
        <TabContext value={value}>
          <AppBar position="fixed" className={classes.tab}>
            <TabList
              className={classes.tabs}
              TabIndicatorProps={{ children: <span /> }}
              onChange={handleChange}
            >
              <Tab
                disableRipple
                className={classes.title}
                label="Following"
                value="1"
              />
              <Tab
                disableRipple
                className={classes.title}
                label="Followers"
                value="2"
              />
            </TabList>
          </AppBar>
          <TabPanel className={classes.panel} value="1">
            {following.length > 0 ? (
              following.map(user => (
                <FollowItem
                  user={user}
                  setOpenModal={setOpenFollowModal}
                  publicKey={user.publicAddress}
                />
              ))
            ) : (
              <Typography variant="h3" className={classes.text}>
                Current creator is not following other creators at the time.
              </Typography>
            )}
          </TabPanel>
          <TabPanel className={classes.panel} value="2">
            {followers.length > 0 ? (
              followers.map(user => (
                <FollowItem
                  user={user}
                  setOpenModal={setOpenFollowModal}
                  publicKey={user.publicAddress}
                />
              ))
            ) : (
              <Typography variant="h3" className={classes.text}>
                Current creator has no followers at the time.
              </Typography>
            )}
          </TabPanel>
        </TabContext>
      </Modal>
    </div>
  )
}

export default FollowersModal
