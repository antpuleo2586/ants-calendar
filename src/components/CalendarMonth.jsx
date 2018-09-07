import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.h1`
    text-align: center;
`;

const CalendarMonth = ({ title }) => (
  <Header>
    { title }
  </Header>
);

CalendarMonth.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CalendarMonth;
