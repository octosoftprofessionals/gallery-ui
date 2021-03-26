import React from 'react';
import moment from 'moment';
import styles from './Countdown.module.css';

const UTC_TIMESTAMP = '2021-03-29T00:30:00Z';

class Countdown extends React.Component {
  state = {
    nowM: moment(),
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        nowM: moment(),
      })
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const deadlineM = moment.utc(UTC_TIMESTAMP);
    const nowM = moment();
    const days = deadlineM.diff(nowM, 'days');
    const hours = deadlineM.diff(nowM, 'hours') % 24;
    const mins = deadlineM.diff(nowM, 'minutes') % 60;
    const seconds = deadlineM.diff(nowM, 'seconds') % 60;
    if (days <= 0 && hours <= 0 && mins <= 0 && seconds <= 1) return null;
    const { long, onNavbar } = this.props;
    return (
      <span className={[
        styles.container,
        long ? styles.long : undefined,
        onNavbar ? styles.onNavbar : undefined
      ].join(' ')}>
        <span className={styles.prompt}>Ends in</span>{' '}
        <span className={styles.digit}>{days}</span>
        <span className={styles.label}>{ long ? 'days' : ':'}</span>
        <span className={styles.digit}>{
          String(hours).length == 1 ? '0' + hours : hours
        }</span>
        <span className={styles.label}>{ long ? 'hr' : ':'}</span>
        <span className={styles.digit}>{
          String(mins).length === 1 ? '0' + mins : mins
        }</span>
        <span className={styles.label}>{ long ? 'min' : ':'}</span>
        <span className={styles.digit}>{
          String(seconds).length === 1 ? '0' + seconds : seconds
        }</span>
        <span className={styles.label}>{ long ? 'sec' : ''}</span>
      </span>
    )
  }
}

export default Countdown;
