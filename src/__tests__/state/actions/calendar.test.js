import moment from 'moment';
import { createStore } from 'redux';
import reducers from '../../../state/reducers';
import * as actions from '../../../state/actions/calendar';
import * as selectors from '../../../state/selectors/calendar';
import Reminder from '../../../models/Reminder';

let store;

describe('calendar', () => {
  beforeEach(() => {
    store = createStore(reducers);
  });

  it('Should set the current month', () => {
    const month = moment('2019-11').format('YYYY-MM');
    store.dispatch(actions.setCurrentMonth(month));

    const state = store.getState();

    expect(selectors.getCurrentMonth(state)).toEqual(month);
  });

  it('Should add a reminder to the state and return an array for the specified date', () => {
    const reminder = new Reminder({
      time: 8,
      note: 'Brush your teeth!',
      colour: 'red',
    });
    const date = '2018-09-05';

    store.dispatch(actions.addReminder(date, reminder));

    const state = store.getState();

    const getReminders = selectors.makeGetReminders();
    expect(getReminders(state, date)).toEqual([
      reminder,
    ]);
  });

  it('Should add two reminders to the state and return an array for the specified date, in time order', () => {
    const reminderOne = new Reminder({
      time: 9,
      note: 'Go to work',
      colour: 'red',
    });
    const reminderTwo = new Reminder({
      time: 8,
      note: 'Walk the dog',
      colour: 'blue',
    });
    const date = '2018-09-08';

    store.dispatch(actions.addReminder(date, reminderOne));
    store.dispatch(actions.addReminder(date, reminderTwo));

    const state = store.getState();

    const getReminders = selectors.makeGetReminders();
    expect(getReminders(state, date)).toEqual([
      reminderTwo,
      reminderOne,
    ]);
  });
});
