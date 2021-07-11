import React from 'react'
import { CircularProgress, Box } from '@material-ui/core'

const Spinner = ({ height }) => {
  return (
    <Box
      width="100%"
      height={height}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  )
}

export default Spinner
