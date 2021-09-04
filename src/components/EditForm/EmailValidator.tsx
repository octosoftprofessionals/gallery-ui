import React, { useState } from 'react'
import {useQuery} from 'react-query'
import { Alert } from '@material-ui/lab'
import { Collapse } from '@material-ui/core'
import {validateEmail} from '../../Utils/stringUtils'
import { getUser } from '../../services/users'

const EmailValidator = ({ checkAvailability, account, email, userEmailList, error, setError, classes, savedEmail, setSavedEmail }) => {
    

    // Could be a custom hook
    const checkEmailServerSituation = async() => {
      const { data: userData, isLoading } = await useQuery(
        'userEmailValidator',
        () => getUser({ public_address: account }),
        {
          refetchOnWindowFocus: false,
        }
      )
      if(!isLoading){
        const {email} = userData
        console.log(`email :>>>`, email)
        email ? setSavedEmail(email) : setSavedEmail("No existing previous email")
      }
    }
    checkEmailServerSituation()

    if(email.length === 0) setError(true)
    return (
        <Collapse in={error}>
                  {email.length === 0 ?
                  <Alert
                    variant="filled"
                    severity="warning"
                    icon={false}
                    className={classes.alert}
                  >
                    <strong>This field can't be empty</strong>
                  </Alert>
                  : (!validateEmail(email)) ?
                    <Alert
                      variant="filled"
                      severity="info"
                      icon={false}
                      className={classes.alert}
                    >
                       <strong>Verifing email...</strong>
                    </Alert>
                  :(savedEmail === email) ?
                    <Alert
                      variant="filled"
                      severity="success"
                      icon={false}
                      className={classes.alert}
                    >
                       <strong>Your email is same as saved!</strong>
                    </Alert>
                    :
                    (checkAvailability(userEmailList, email) === false) ?
                    <Alert
                      variant="filled"
                      severity="error"
                      icon={false}
                      className={classes.alert}
                    >
                       <strong>Email {email} has already been taken</strong>
                    </Alert>
                    :
                    <Alert
                      variant="filled"
                      severity="success"
                      icon={false}
                      className={classes.alert}
                    >
                       <strong>Your email is ok!</strong>
                    </Alert>
                  }
                </Collapse>
     );
}

export default EmailValidator;