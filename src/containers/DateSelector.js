import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DateDisplay from '../components/DateDisplay';
import { setPreviousDate, setNextDate } from '../store/actions/filterActions';

const DateSelector = ({ setPreviousDate, setNextDate, date }) => (
  <DateDisplay setPreviousDate={setPreviousDate} setNextDate={setNextDate} date={date} />
);

DateSelector.propTypes = {
  setPreviousDate: PropTypes.func.isRequired,
  setNextDate: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    setPreviousDate: () => dispatch(setPreviousDate()),
    setNextDate: () => dispatch(setNextDate()),
  }
);

const mapStateToProps = state => (
  {
    date: state.filterReducer.date,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);
