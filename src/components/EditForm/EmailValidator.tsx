import React from 'react'
import { Alert } from '@material-ui/lab'
import { Collapse } from '@material-ui/core'

const EmailValidator = ({ email, mailAvailable, error, classes }) => {
    return (
        <Collapse in={error}>
                  {email.length === 0 ?
                  <Alert
                    variant="filled"
                    severity="warning"
                    icon={false}
                    className={classes.alert}
                  >
                    <strong>This field is mandatory</strong>
                  </Alert>
                  : (mailAvailable === undefined) ?
                    <Alert
                      variant="filled"
                      severity="info"
                      icon={false}
                      className={classes.alert}
                    >
                       <strong>Verifing email...</strong>
                    </Alert>
                  : (mailAvailable.availability === false) ?
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