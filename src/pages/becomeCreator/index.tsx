import React from 'react'

import Layout from '../../components/Layout/Layout'
import { makeStyles } from '@material-ui/core/styles'
import BecomeCreatorCover from '../../components/BecomeCreatorCover'
import { colors } from '../../components/Styles/Colors'

const useStyle = makeStyles(Theme => ({
  root: {
    flex: 1,
    margin: Theme.spacing(5, 10),
    boxSizing: "border-box",
    height: "100%",
    '@media (max-width: 576px)': {
      padding: Theme.spacing(0, 0),
      height: "100%",
    },
  },

}))

const BecomeCreator = () => {
  const classes = useStyle()
  return (
    <Layout
      backgroundColor={colors.WhiteSmoke}
      padding="0"
      marginBottom="0"
      marginTop="0"
    >
      <div className={classes.root}>
        <BecomeCreatorCover></BecomeCreatorCover>
      </div>
    </Layout >
  )
}

export default BecomeCreator
