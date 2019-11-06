import React from 'react';
import { shallow } from 'enzyme';
import TheProductGrind from './TheProductGrind'
import { findByTestAtrr } from '../../support/testUtility'

const setUp = (props={}) => {
  const component = shallow(<TheProductGrind {...props} />);
  return component;
};

describe('Product grind UI', () => {

  let component
  beforeEach( ()=>{
    component =setUp()
  });

  it('Should render without errors product-grind', () => {
    const wrapper =findByTestAtrr(component, 'product-grind')
    expect(wrapper.length).toBe(1);
  });
});