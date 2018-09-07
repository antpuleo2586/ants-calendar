import React, { PureComponent } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CalendarCell from '../containers/CalendarCell';
import CalendarAddReminderComponent from '../containers/CalendarAddReminder';

const Cells = styled.div`
    display: -webkit-flex; /* Safari */
     -webkit-flex-wrap: wrap; /* Safari 6.1+ */
     display: flex;
     flex-wrap: wrap;
`;

class CalendarCells extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: null,
      isAddReminderVisible: false,
    };

    this.toggleShowAddReminder = this.toggleShowAddReminder.bind(this);
  }

  toggleShowAddReminder(currentDate = null) {
    this.setState({
      currentDate,
      isAddReminderVisible: !this.state.isAddReminderVisible,
    });
  }

  render() {
    const {
      isAddReminderVisible,
      currentDate,
    } = this.state;

    const {
      currentMonth,
    } = this.props;

    const startDayOfCurrentMonth = parseInt(moment(currentMonth).startOf('month').format('d'), 10);
    const daysInCurrentMonth = moment(currentMonth).daysInMonth();
    const cells = [];
    const cellsFromTheEnd = 7 - ((startDayOfCurrentMonth + daysInCurrentMonth) % 7);

    // NOTE: I didn't have time to, but I would refactor a lot of this out to possibly generate in a selector,
    // based on the currentMonth property in the redux state, as to contain the logic there.

    for (let i = 1; i <= startDayOfCurrentMonth; i++) {
      cells.push(<CalendarCell key={`last-month-${i}`} />);
    }

    for (let i = 1; i <= daysInCurrentMonth; i++) {
      cells.push(<CalendarCell
        date={moment(currentMonth).date(i).format('YYYY-MM-DD')}
        day={i}
        key={`current-month-${i}`}
        onClick={this.toggleShowAddReminder}
      />);
    }

    for (let i = 1; i <= cellsFromTheEnd; i++) {
      cells.push(<CalendarCell key={`next-month-${i}`} />);
    }

    return (
      <Cells>
        {cells}
        {isAddReminderVisible && (
          <CalendarAddReminderComponent
            toggleVisibility={this.toggleShowAddReminder}
            currentDate={currentDate}
          />
        )}
      </Cells>
    );
  }
}
CalendarCells.propTypes = {
  currentMonth: PropTypes.string.isRequired,
};

export default CalendarCells;
