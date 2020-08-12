import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/DateDisplay.module.scss';

const DateDisplay = ({ setPreviousDate, setNextDate, date }) => (
  <div className={styles.mainContainer}>
    <button className={styles.button} type="button" onClick={() => setPreviousDate()}><i aria-label="Previous day" className="fas fa-lg fa-chevron-left" /></button>
    <time className={date}>{date.toDateString()}</time>
    <button className={styles.button} type="button" onClick={() => setNextDate()}><i aria-label="Next day" className="fas fa-lg fa-chevron-right" /></button>
  </div>
);

DateDisplay.propTypes = {
  setPreviousDate: PropTypes.func.isRequired,
  setNextDate: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default DateDisplay;
