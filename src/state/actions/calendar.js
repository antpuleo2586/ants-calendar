import { ADD_REMINDER, SET_CURRENT_MONTH } from './types';

export const addReminder = (date, reminder) => ({
  type: ADD_REMINDER,
  payload: {
    date,
    reminder,
  },
});

export const setCurrentMonth = month => ({
  type: SET_CURRENT_MONTH,
  payload: month,
});
