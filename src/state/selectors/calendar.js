import { createSelector } from 'reselect';

export const getCurrentMonth = state => state.calendar.currentMonth;
export const makeGetReminders = () => createSelector(
  [state => state, (state, date) => date],
  (state, date) => (state.calendar.reminders[date] || [])
    .sort((a, b) => a.time - b.time),
);
