import React from 'react';
import {shallow} from 'enzyme';
import Cohort from './Cohort';

describe.skip('Cohort', () => {
  it('should render all elements with the correct input', () => {
    const wrapper = shallow(<Cohort/>)
      expect(wrapper).toMatchSnapshot();

  })

})