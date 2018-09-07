import moment from 'moment';
import Reminder from '../../models/Reminder';
import { SET_CURRENT_MONTH, ADD_REMINDER } from '../actions/types';

const initialState = {
  currentMonth: moment().format('YYYY-MM'),
  reminders: {
    '2018-09-10': [
      new Reminder({
        note: 'Home',
        time: '17',
        colour: 'green',
      }),
      new Reminder({
        note: 'Work',
        time: '09',
        colour: 'yellow',
      }),
    ],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_CURRENT_MONTH:
    return {
      ...state,
      currentMonth: action.payload,
    };
  case ADD_REMINDER: {
    return {
      ...state,
      reminders: {
        ...state.reminders,
        [action.payload.date]: [
          ...state.reminders[action.payload.date] || [],
          action.payload.reminder,
        ],
      },
    };
  }
  default:
    return state;
  }
};
