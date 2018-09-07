import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CalendarMonth from '../components/CalendarMonth';
import CalendarDays from '../components/CalendarDays';
import CalendarCells from '../components/CalendarCells';
import { getCurrentMonth } from '../state/selectors/calendar';

// Note: I try to add these styles outside classes, as not to redeclare in the render method on each render, for example
const CalendarWrapper = styled.div`
    margin: 0 auto;
    border: 2px black solid;
    width: 882px;
`;

export class App extends PureComponent {
  render() {
    const {
      currentMonth,
    } = this.props;

    return (
      <CalendarWrapper>
        <CalendarMonth title={moment(currentMonth).format('MMMM YYYY')} />
        <CalendarDays />
        <CalendarCells
          currentMonth={currentMonth}
        />
      </CalendarWrapper>
    );
  }
}

App.propTypes = {
  currentMonth: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentMonth: getCurrentMonth(state),
});

export default connect(mapStateToProps)(App);
