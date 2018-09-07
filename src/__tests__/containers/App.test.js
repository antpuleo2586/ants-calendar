import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import moment from 'moment';
import { App } from '../../containers/App';
import CalendarMonth from '../../components/CalendarMonth';
import CalendarDays from '../../components/CalendarDays';
import CalendarCells from '../../components/CalendarCells';

let props;

describe('App', () => {
  beforeEach(() => {
    const currentMonth = moment().format('YYYY-MM-DD');

    props = {
      currentMonth,
    };
  });

  it('Renders all the calendar components', () => {
    const wrapper = shallow(<App {...props} />);

    expect(wrapper.find(CalendarMonth)).toExist();
    expect(wrapper.find(CalendarDays)).toExist();
    expect(wrapper.find(CalendarCells)).toExist();
  });
});
