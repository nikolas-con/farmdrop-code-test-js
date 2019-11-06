import React from 'react';
import { shallow } from 'enzyme';
import TheProductGrind from './TheProductGrind'
// import { findByTestAtrr } from '../../support/testUtility'

const setUp = (props={}) => {
  const component = shallow(<TheProductGrind {...props} />);
  return component;
};

describe('Product grind UI', () => {

  let component
  beforeEach( ()=>{
    component =setUp()
  });
  it('check grid children count if data are fetched', () => {
    let store = mockStore({products: mockProducts, basketProducts: []})
    let wrapper = enzyme.mount(<Provider store={store}><TheProductGrind /></Provider>)
    
    expect(wrapper.find('[data-testid="lst-products-grid"]').children().length).toBe(21)
  })
});