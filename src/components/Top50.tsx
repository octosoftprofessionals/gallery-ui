import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Top50Item from './Top50Item'

const useStyles = makeStyles(Theme => ({
  table: {
    minWidth: 650,
  },
  title: {
    color: Theme.palette.primary.main,
    fontSize: Theme.typography.fontSize[10],
    fontFamily: Theme.typography.fontFamily[5],
  },
}))

const Top50Grid = ({ creatorsQuery }) => {
  creatorsQuery
    ? creatorsQuery.sort(
        (a, b) => parseFloat(b.followers) - parseFloat(a.followers)
      )
    : null
  const classes = useStyles()
  return (
    <TableContainer component={Paper} elevation={2}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.title} align="left">
              Top 50
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {creatorsQuery
            ? creatorsQuery.slice(0, 50).map((creator, index) => (
                <TableRow key={creator.userIndex}>
                  <TableCell component="th" scope="row">
                    <Top50Item
                      name={creator.name}
                      imgUrl={creator.profileImageUrl}
                      username={creator.username}
                      twitter={creator.links.twitter.handle}
                      topNumber={index + 1}
                      followers={creator.followers}
                    />
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Top50Grid
