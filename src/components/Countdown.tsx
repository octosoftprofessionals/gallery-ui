import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const UTC_TIMESTAMP = '2021-03-29T01:00:00Z'

class Countdown extends React.Component {
  state = {
    nowM: moment(),
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        nowM: moment(),
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    const deadlineM = moment.utc(UTC_TIMESTAMP)
    const nowM = moment()
    const days = deadlineM.diff(nowM, 'days')
    const hours = deadlineM.diff(nowM, 'hours') % 24
    const mins = deadlineM.diff(nowM, 'minutes') % 60
    const seconds = deadlineM.diff(nowM, 'seconds') % 60

    if (days <= 0 && hours <= 0 && mins <= 0 && seconds <= 1) {
      return null
    }

    const { isLong = false } = this.props

    return (
      <Root isLong={isLong}>
        <PromptText>Ends in</PromptText>{' '}

        <Digit>{days}</Digit>
        <Label>{ isLong ? 'days' : ':'}</Label>

        <Digit>{
          String(hours).length == 1 ? '0' + hours : hours
        }</Digit>
        <Label>{ isLong ? 'hr' : ':'}</Label>

        <Digit>{
          String(mins).length === 1 ? '0' + mins : mins
        }</Digit>
        <Label>{ isLong ? 'min' : ':'}</Label>

        <Digit>{
          String(seconds).length === 1 ? '0' + seconds : seconds
        }</Digit>
        <Label>{ isLong ? 'sec' : ''}</Label>
      </Root>
    )
  }
}

export default Countdown;

const Root = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: 40px;
  margin-left: 5px;

  ${props => props.isLong ? `
    .label {
      margin: 0 5px;
      font-size: 0.66em;
      color: #a2a2a2;
    }
  ` : ''}
`;

const PromptText = styled.span`
  opacity: 0.7;
  font-size: 0.95em;
  color: #e0bd70;
`;

const Label = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  color: black;
  font-weight: bold;
  margin: 0 2px;
`;

const Digit = styled.span`
  font-weight: bold;
`;
