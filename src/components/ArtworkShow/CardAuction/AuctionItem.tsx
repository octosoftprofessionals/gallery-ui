import React, { useEffect, useState } from 'react'
import { Grid, Divider, Paper } from '@material-ui/core'
import { deltaTime, timerArray } from '../../../Utils'

const endIn = new Date('2021/06/25 11:45:00 PM')

const AuctionItem = () => {
  const [timer, setTimer] = useState(0)
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const delta = deltaTime(endIn)
      if (delta >= 0) {
        setTimer(timerArray(delta))
      } else {
        clearInterval(timeInterval)
        setTimer(0)
      }
    }, 1000)
  }, [])
  let { Hours, Minutes, Seconds } = timer
  return (
    <Grid item xs={4}>
      <Paper>
        <Grid item container>
          <Grid container direction="row">
            <Grid item xs={6}>
              sold
            </Grid>
            <Divider />
            <Grid item xs={6}>
              Other
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default AuctionItem
