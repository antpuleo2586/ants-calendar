import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Reminder = ({ time, note, colour }) => {
  const Label = styled.div`
    background-color: ${colour};
`;

  return (
    <Label>
      <p>{`${time}:00 - ${note}`}</p>
    </Label>
  );
};

Reminder.propTypes = {
  time: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
};

export default Reminder;
