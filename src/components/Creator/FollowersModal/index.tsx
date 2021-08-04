import React, { useState } from 'react'
import Modal from '../../Modal'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import Tabs from '@material-ui/core/Tabs'
import TabPanel from '@material-ui/lab/TabPanel'
import TabList from '@material-ui/lab/TabList'
import FollowItem from './FollowItem'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  tab: {
    // backgroundColor: 'transparent',
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    height: theme.spacing(15),
    borderBottom: '1px solid #6666',
    padding: theme.spacing(4, 2, 0, 2),
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
    paddingTop: theme.spacing(15),
  },
  title: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: theme.typography.fontSize[4],
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
  tabContainer: {
    // width: '600px',
  },
}))

const FollowersModal = ({
  openFollowModal,
  setOpenFollowModal,
  followers,
  following,
}) => {
  const classes = useStyles()
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  console.log('HOLI')
  console.log('followers', followers)
  console.log('following', following)

  return (
    <div>
      <Modal
        showTitle={false}
        open={openFollowModal}
        setOpen={setOpenFollowModal}
      >
        <TabContext value={value}>
          <AppBar position="static" className={classes.tab}>
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
            {following
              ? following.map(user => {
                  return <FollowItem user={user} />
                })
              : null}
          </TabPanel>
          <TabPanel className={classes.panel} value="2">
            {followers
              ? followers.map(user => {
                  return <FollowItem user={user} />
                })
              : null}
          </TabPanel>
        </TabContext>
      </Modal>
    </div>
  )
}

export default FollowersModal
