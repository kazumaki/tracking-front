import React from 'react';
import { connect } from 'react-redux';
import DateDisplay from '../components/DateDisplay';
import { setPreviousDate, setNextDate } from '../store/actions/filterActions';

const DateSelector = ({setPreviousDate, setNextDate, date}) => {
  return (
    <DateDisplay setPreviousDate={setPreviousDate} setNextDate={setNextDate} date={date} />
  );
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
