import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { makeGetReminders } from '../state/selectors/calendar';
import ReminderComponent from '../components/Reminder';
import Reminder from '../models/Reminder';

const Cell = styled.div`
    border: 1px black solid;
    width: 100px;
    height: 100px;
    margin: 2px;
    display: block;
    padding: 10px;
`;

const CalendarCell = ({
  date, day, reminders, onClick,
}) => (
  <Cell onClick={() => onClick(date)}>
    {day}
    {reminders.map(reminder => (<ReminderComponent key={reminder.time} {...reminder} />))}
  </Cell>
);

CalendarCell.propTypes = {
  day: PropTypes.number,
  date: PropTypes.string,
  reminders: PropTypes.arrayOf(PropTypes.instanceOf(Reminder)),
  onClick: PropTypes.func,
};

CalendarCell.defaultProps = {
  day: null,
  date: null,
  reminders: [],
  onClick: () => {},
};

const mapStateToProps = (state, props) => {
  const getReminders = makeGetReminders();

  return {
    reminders: getReminders(state, props.date),
  };
};

export default connect(mapStateToProps)(CalendarCell);
