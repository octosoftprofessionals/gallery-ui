import React from 'react'
import { Alert } from '@material-ui/lab'
import { Collapse } from '@material-ui/core'

const EmailAlert = ({
  value,
  error,
  classes,
  savedDataField,
  type,
  validateEmail,
  checkAvailability,
  userDataList,
}: {
  value: string
  error: boolean
  classes: any
  savedDataField: string
  type: string
  validateEmail: Function
  checkAvailability: Function
  userDataList: string[]
}) => {
  return (
    <Collapse in={error}>
      {value.length === 0 ? (
        <Alert
          variant="filled"
          severity="warning"
          icon={false}
          className={classes.alert}
        >
          <strong>This field can't be empty</strong>
        </Alert>
      ) : !validateEmail(value) ? (
        <Alert
          variant="filled"
          severity="error"
          icon={false}
          className={classes.alert}
        >
          <strong>Invalid {type.toLowerCase()} format.</strong>
        </Alert>
      ) : savedDataField === value ||
        savedDataField === '' ? null : checkAvailability(
          userDataList,
          value
        ) === false ? (
        <Alert
          variant="filled"
          severity="error"
          icon={false}
          className={classes.alert}
        >
          <strong>
            {type} {value} has already been taken
          </strong>
        </Alert>
      ) : (
        <Alert
          variant="filled"
          severity="success"
          icon={false}
          className={classes.alert}
        >
          <strong>Your email is ok!</strong>
        </Alert>
      )}
    </Collapse>
  )
}

export default EmailAlert
