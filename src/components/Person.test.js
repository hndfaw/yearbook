import React from 'react'; 
import { shallow } from 'enzyme';
import Person from './Person';

describe('Card', () => {
  it('should match the snapshot with all data passed correctly', () => { 
    const wrapper = shallow(
      <Person
        name='Antonio'
        quote='this shit is'
        id={1}
        photo="https://placekitten.com/200/300"
        />
      );
      // console.log(wrapper.debug())
      expect(wrapper).toMatchSnapshot();
  });
}); 