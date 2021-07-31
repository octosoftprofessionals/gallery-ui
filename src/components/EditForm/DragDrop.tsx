import React, { useState } from 'react'
import {
  AttachFile,
  AudioTrack,
  Description,
  PictureAsPdf,
  Theaters,
} from '@material-ui/icons'
import { DropzoneArea } from 'material-ui-dropzone'

const DragDrop = () => {
  return (
    <DropzoneArea
      acceptedFiles={['image/*']}
      dropzoneText={'Drag and drop an image here or click'}
      onChange={files => console.log('Files:', files)}
    />
  )
}
export default DragDrop
