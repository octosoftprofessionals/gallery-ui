import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import SearchCreator from './SearchCreator'
import GridCreator from '../Gallery'

const useStyle = makeStyles(Theme => ({
  root: {},
}))

const Creators = ({ creatorsQuery, status }) => {
  const [search, setSearch] = useState<String>('')
  const [creators, setCreators] = useState<Array[]>([])

  if (creatorsQuery && creators.length <= 0) {
    setCreators(creatorsQuery)
  }
  console.log('object :>> ', creators)

  // console.log(
  //   'creators :>> ',
  //   creators.filter(artworks =>
  //     artworks.creator.username.toLowerCase().includes(search)
  //   )
  // )

  const classes = useStyle()
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <SearchCreator
          searchBar={search}
          setSearchBar={setSearch}
          status={status}
        />
      </Grid>
      {creatorsQuery ? (
        <GridCreator artworksQuery={creators} itemType="creator" />
      ) : (
        ''
      )}
    </Grid>
  )
}

export default Creators
