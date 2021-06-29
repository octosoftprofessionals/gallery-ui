import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  root: { padding: Theme.spacing(0, 5) },
  title: {
    fontSize: `${Theme.typography.fontSize[2]}em`,
    textAlign: 'center',
  },
  text: { marginTop: Theme.spacing(11), textAlign: 'justify' },
  secondaryTitle: { marginTop: Theme.spacing(12) },
}))

const CommunityGuidelines = ({ dateTime }) => {
  const classes = useStyle()
  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={6}>
        <Typography variant="h3" color="primary" className={classes.title}>
          Community Guidelines
        </Typography>
      </Grid>
      <Typography variant="subtitle1" color="primary">
        {`LAST UPDATE - ${dateTime}`}
      </Typography>
      <Grid item xs={8}>
        <Typography variant="body2" color="primary" className={classes.text}>
          {
            'Ipsum magna consequat magna consectetur sunt qui consequat elit id pariatur dolore. Eu qui et Lorem qui voluptate occaecat consectetur voluptate est. Eiusmod laboris irure ullamco ea cillum ad et. Qui deserunt eu qui nulla commodo et consectetur incididunt labore. Esse proident mollit enim nostrud cillum. Voluptate voluptate mollit ex non. Esse non aute quis nostrud nulla labore cupidatat consectetur. Ea nulla cupidatat pariatur officia irure esse fugiat aliquip laborum cillum ea excepteur cupidatat. Enim eu labore non irure voluptate consectetur non ad esse fugiat do enim. Amet ut ex ullamco ullamco pariatur est occaecat. Officia sit pariatur aliquip sit in mollit esse veniam. Velit culpa incididunt anim labore incididunt mollit magna consectetur dolor sit. Ullamco mollit irure excepteur dolore duis dolor laborum non adipisicing eu. Magna Lorem esse sit et ex sint dolor dolore amet.'
          }
        </Typography>
        <Typography
          variant="h4"
          color="primary"
          className={classes.secondaryTitle}
        >
          For the Community
        </Typography>
        <Typography variant="body2" color="primary" className={classes.text}>
          {
            'Ipsum magna consequat magna consectetur sunt qui consequat elit id pariatur dolore. Eu qui et Lorem qui voluptate occaecat consectetur voluptate est. Eiusmod laboris irure ullamco ea cillum ad et. Qui deserunt eu qui nulla commodo et consectetur incididunt labore. Esse proident mollit enim nostrud cillum. Voluptate voluptate mollit ex non. Esse non aute quis nostrud nulla labore cupidatat consectetur. Ea nulla cupidatat pariatur officia irure esse fugiat aliquip laborum cillum ea excepteur cupidatat. Enim eu labore non irure voluptate consectetur non ad esse fugiat do enim. Amet ut ex ullamco ullamco pariatur est occaecat. Officia sit pariatur aliquip sit in mollit esse veniam. Velit culpa incididunt anim labore incididunt mollit magna consectetur dolor sit. Ullamco mollit irure excepteur dolore duis dolor laborum non adipisicing eu. Magna Lorem esse sit et ex sint dolor dolore amet.'
          }
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CommunityGuidelines
