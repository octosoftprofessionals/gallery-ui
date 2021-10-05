import React from 'react'
import { Popover } from '@material-ui/core'

import TwShareButton from '../../../TwShareButton'
import CopyLinkButton from '../../../CopyLinkButton'

const PopoverTwitter = ({
  open,
  anchorEl,
  getUrl,
  linkTwitter,
  handleClose,
}: {
  open: boolean
  anchorEl: Element
  getUrl: (v: unknown) => void
  linkTwitter: string
  handleClose: (v: unknown) => void
}) => {
  return (
    <Popover
      open={open}
      onClose={handleClose}
      id={open ? 'simple-popover' : undefined}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      anchorPosition={{
        top: 200,
        left: 200,
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <TwShareButton linkTwitter={linkTwitter} />
      <CopyLinkButton onClick={getUrl} />
    </Popover>
  )
}

export default PopoverTwitter
