import React from 'react';
import { shallow } from 'enzyme';
import TheHeader from './TheHeader.js';

describe('famoto', ()=> {
  it('test', () => {
    const component = shallow(<TheHeader/>)
    const wrapper = component.find('.header-bar')
    expect(wrapper.length).toBe(1)
  })
})