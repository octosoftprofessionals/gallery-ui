import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import SearchCreator from './SearchCreator'
import GridCreator from '../Gallery'

const useStyle = makeStyles(Theme => ({
  root: {},
}))

const Creators = ({ creatorsQuery = [], status }) => {
  const [filteredCreators, setFilteredCreators] = useState(creatorsQuery)
  const [search, setSearch] = useState<String>('')

  useEffect(() => {
    if (search.length > 0) {
      const filtered = creatorsQuery.filter(creator =>
        creator.username.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredCreators(filtered)
    } else {
      setFilteredCreators(creatorsQuery)
    }
  }, [search, creatorsQuery])
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
      <GridCreator creatorsQuery={filteredCreators} itemType="creator" />
    </Grid>
  )
}

export default Creators
