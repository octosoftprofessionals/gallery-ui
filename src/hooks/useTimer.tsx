import { useState, useEffect } from 'react'
import { deltaTime, timerArray } from '../Utils'

const useTimer = ({ expiration }: { expiration: Date }) => {
  const [timer, setTimer] = useState<any>(0)
  const [changeTitle, setChangeTitle] = useState<string>('Auction ending in')
  const [variantButton, setVariantButton] = useState<string>('contained')
  const [textButton, setTextButton] = useState<string>('Place a bid')
  const [infoAution, setInfoAution] = useState<string>(
    'Any bids placed in the last 15 minutes will extend the auction for another 15 minutes.'
  )
  const [disableInfo, setDisableInfo] = useState<boolean>(false)
  const [disableHours, setDisableHours] = useState<boolean>(true)
  const [disableDays, setDisableDays] = useState<boolean>(true)
  const [disableTime, setDisableTime] = useState<boolean>(true)
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const delta = deltaTime(expiration)
      if (delta >= 0) {
        setTimer(timerArray(delta))
      } else {
        clearInterval(timeInterval)
        setDisableTime(false)
        setVariantButton('outlined')
        setTextButton('I understand, let me bid anyway')
        setInfoAution(
          'If you were to place a bid at this time there is a high chance that it would result in an error.'
        )
        setTimer(0)
      }

      let { Days, Hours, Minutes } = timerArray(delta)
      if (Days <= 0) {
        setDisableDays(false)
      }
      if (Hours <= 0) {
        setDisableHours(false)
      }
      if (Hours <= 0 && Minutes <= 15) {
        setDisableInfo(true)
        setChangeTitle('This auction is ending soon!')
      }
    }, 1000)
  }, [])

  return {
    timer,
    changeTitle,
    variantButton,
    textButton,
    infoAution,
    disableDays,
    disableHours,
    disableInfo,
    disableTime,
  }
}

export default useTimer
