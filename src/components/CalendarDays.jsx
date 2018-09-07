import React from 'react';
import styled from 'styled-components';

const DayWrapper = styled.div`
    display: -webkit-flex; /* Safari */
     -webkit-flex-wrap: wrap; /* Safari 6.1+ */
     display: flex;
     flex-wrap: wrap;
`;

const Day = styled.div`
    text-align: center;
    border: 1px black solid;
    width: 100px;
    height: 20px;
    margin: 2px;
    display: block;
    padding: 10px;
`;

const daysInWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const CalendarDays = () => (
  <DayWrapper>
    {daysInWeek.map(day => (<Day key={day}>{day}</Day>))}
  </DayWrapper>
);

export default CalendarDays;
