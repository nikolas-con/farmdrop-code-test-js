import React from 'react';
import { shallow } from 'enzyme';
import TheHeader from './TheHeader';

const attr = ['header-bar', 'img-logo', 'con-basket', 'img-basket-icon'] // 'text-basket'
const setUp = (props={}) => {
  const component = shallow(<TheHeader {...props} />);
  return component;
};

const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
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
