import React from 'react';
import { shallow } from 'enzyme';
import TheHeader from './TheHeader';
import { findByTestAtrr } from '../../support/testUtility'

const attr = ['header-bar', 'img-logo', 'con-basket', 'img-basket-icon'] // 'text-basket'
const setUp = (props={}) => {
  const component = shallow(<TheHeader {...props} />);
  return component;
};

describe('Header componet',() => {
  let component
  beforeEach(()=> {
    const props ={
      basket: 'test basket' 
    }
    component = setUp(props); 
  })
  attr.forEach(attr => {
    it(`Should render without errors ${attr}`, () => {
      const wrapper =findByTestAtrr(component, attr)
      expect(wrapper.length).toBe(1);
    });
  });
});
