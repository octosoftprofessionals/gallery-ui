import React from 'react'

import { Popover } from '@material-ui/core'

import ReportButton from '../../../ReportButton'
import { Function } from 'lodash'
const PopoverReport = ({
  openReport,
  handleCloseReport,
  anchorElReport,
  setDisplayModal,
}: {
  openReport: boolean
  anchorElReport: Element
  handleCloseReport: (v: unknown) => void
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Popover
      open={openReport}
      id={openReport ? 'simple-popover' : undefined}
      onClose={handleCloseReport}
      anchorEl={anchorElReport}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <ReportButton onClick={setDisplayModal} />
    </Popover>
  )
}

export default PopoverReport
