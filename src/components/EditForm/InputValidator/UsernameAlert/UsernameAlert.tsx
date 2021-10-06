import React from 'react'
import { Alert } from '@material-ui/lab'
import { Collapse } from '@material-ui/core'

const UserNameAlert = ({
  value,
  error,
  classes,
  savedDataField,
  type,
  checkAvailability,
  userDataList,
}: {
  value: string
  error: boolean
  savedDataField: string
  type: string
  checkAvailability: Function
  userDataList: string[]
  classes: any
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
      ) : savedDataField === value ? null : checkAvailability(
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
          <strong>Your {type} is ok!</strong>
        </Alert>
      )}
    </Collapse>
  )
}

export default UserNameAlert
