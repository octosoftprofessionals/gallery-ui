import React from 'react'
import { useQuery } from 'react-query'
import { validateEmail } from '../../../Utils/stringUtils'
import { getUser } from '../../../services/users'
import { makeStyles } from '@material-ui/core/styles'

import EmailAlert from './EmailAlert'
import UsernameAlert from './UsernameAlert'

const styles = makeStyles(theme => ({
  alert: {
    borderRadius: theme.shape.borderRadius[1],
    textAlign: 'center',
  },
}))

const InputValidator = ({
  type,
  savedDataField,
  savedSetter,
  checkAvailability,
  account,
  value,
  userDataList,
  error,
  setError,
}: {
  type: string
  savedDataField: string
  savedSetter: Function
  checkAvailability: Function
  account: string
  value: string
  userDataList: string[]
  error: boolean
  setError: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  // Could be a custom hook
  const checkDataFieldServerSituation = async (dataField, setter) => {
    const { data: userData, isLoading } = await useQuery(
      'userEmailValidator',
      () => getUser({ public_address: account }),
      {
        refetchOnWindowFocus: false,
      }
    )
    if (!isLoading) {
      const destructuredData = userData[`${dataField}`]
      destructuredData
        ? setter(destructuredData)
        : setter(`No existing previous ${destructuredData}`)
    }
  }

  checkDataFieldServerSituation(type.toLowerCase(), savedSetter)

  const classes = styles()

  if (type === 'Email') {
    if (
      value.length === 0 ||
      !validateEmail(value) ||
      checkAvailability(userDataList, value) === false
    )
      setError(true)
    return (
      <EmailAlert
        value={value}
        error={error}
        classes={classes}
        savedDataField={savedDataField}
        type={type}
        validateEmail={validateEmail}
        checkAvailability={checkAvailability}
        userDataList={userDataList}
      />
    )
  }
  if (type === 'Username') {
    if (value.length === 0 || checkAvailability(userDataList, value) === false)
      setError(true)
    return (
      <UsernameAlert
        value={value}
        error={error}
        classes={classes}
        savedDataField={savedDataField}
        type={type}
        checkAvailability={checkAvailability}
        userDataList={userDataList}
      />
    )
  }
}

export default InputValidator
