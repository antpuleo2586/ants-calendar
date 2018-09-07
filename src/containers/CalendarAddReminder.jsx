import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addReminder } from '../state/actions/calendar';
import Reminder from '../models/Reminder';

// Note: this all needs to be extracted out into simpler components
const Box = styled.div`
    text-align: center;
    background-color: white;
    border: 1px black solid;
    width: 500px;
    height: 280px;
    margin: 2px;
    display: block;
    padding: 10px;
    position: absolute;
    top: 200px;
    margin: 0 auto;
    left: 0;
    right: 0;
`;

const Select = styled.select`
    background: white;
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
`;

const TextArea = styled.textarea`
    width: 500px;
    height: 100px;
    margin-bottom: 20px;
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
`;

export class CalendarAddReminder extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      time: '',
      note: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addReminder = this.addReminder.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addReminder() {
    const {
      time,
      note,
    } = this.state;

    const {
      currentDate,
    } = this.props;

    if (time === '') {
      return alert('Please enter a time!');
    }

    if (note.length > 30) {
      return alert('Please enter less than 30 chars!');
    }

    this.props.addReminder(currentDate, new Reminder({ time, note }));
    this.props.toggleVisibility();
  }

  render() {
    return (
      <Box>
        <Select
          onChange={this.handleChange}
          name="time"
        >
          <option value="">Select time</option>
          <option value="00">00:00</option>
          <option value="01">01:00</option>
          <option value="02">02:00</option>
          <option value="03">03:00</option>
          <option value="04">04:00</option>
          <option value="05">05:00</option>
          <option value="06">06:00</option>
          <option value="07">07:00</option>
          <option value="08">08:00</option>
          <option value="09">09:00</option>
          <option value="10">10:00</option>
          <option value="11">11:00</option>
          <option value="12">12:00</option>
          <option value="13">13:00</option>
          <option value="14">14:00</option>
          <option value="15">15:00</option>
          <option value="16">16:00</option>
          <option value="17">17:00</option>
          <option value="18">18:00</option>
          <option value="19">19:00</option>
          <option value="20">20:00</option>
          <option value="21">21:00</option>
          <option value="22">22:00</option>
          <option value="23">23:00</option>
        </Select>
        <TextArea
          onChange={this.handleChange}
          name="note"
        />
        <Button
          onClick={this.addReminder}
        >
            Add Reminder
        </Button>
        <Button
          onClick={this.props.toggleVisibility}
        >
            Cancel
        </Button>
      </Box>
    );
  }
}

CalendarAddReminder.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
  addReminder: PropTypes.func.isRequired,
  currentDate: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  addReminder,
};

export default connect(null, mapDispatchToProps)(CalendarAddReminder);
