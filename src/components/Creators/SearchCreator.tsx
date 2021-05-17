import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  InputAdornment,
  TextField,
  CircularProgress,
} from '@material-ui/core'
import { Search } from '@material-ui/icons'

import { boxShadow } from '../../components/Styles/Colors'

const useStyle = makeStyles(Theme => ({
  root: { padding: Theme.spacing(0, 4) },
  searchInput: {
    boxShadow: boxShadow.boxShadow1,
  },
  icon: {
    fontSize: Theme.typography.fontSize[10],
    fill: Theme.palette.primary.main,
  },
  loading: {
    display: ({ status }) => (status ? 'block' : 'none'),
    width: Theme.spacing(9),
    height: Theme.spacing(9),
  },
}))

const SearchCreator = ({ searchBar, setSearchBar, status }) => {
  const classes = useStyle({ status })
  const PROGRESS = '24px'
  return (
    <Grid
      item
      xs={12}
      container
      justify="space-around"
      className={classes.root}
    >
      <TextField
        placeholder="Search for a creator..."
        fullWidth
        variant="outlined"
        value={searchBar}
        onChange={e => setSearchBar(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search className={classes.icon} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <CircularProgress
                className={classes.loading}
                style={{ width: PROGRESS, height: PROGRESS }}
              />
            </InputAdornment>
          ),
        }}
        className={classes.searchInput}
      />
    </Grid>
  )
}

export default SearchCreator