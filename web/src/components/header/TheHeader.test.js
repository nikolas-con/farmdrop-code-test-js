import React from 'react';
import { mount } from 'enzyme';
import TheHeader from './TheHeader';

import configureStore from 'redux-mock-store'
import mockData from '../../utility/mock/mockData'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
const mockStore = configureStore([thunk])

const mockProducts = mockData.data.productSearch.nodes
// nomizo theli kai alla test alla tr na doume
describe('renders <TheHeader/> componet',() => {
  it('Should render without errors', () => {
    const store = mockStore({products: mockProducts, basket: []})
    const warper = mount(<Provider store={store}><TheHeader/></Provider>)
    expect(warper.find(`[data-test='img-logo']`).exists()).toBe(true)
    expect(warper.find(`[data-test='img-basket-icon']`).exists()).toBe(true)
    expect(warper.find(`[data-test='txt-basket']`).text()).toBe('0')
  });
  it('Should render add items from basket', () => {
    const store = mockStore({products: mockProducts, basket: [mockProducts[0], mockProducts[2] ]})
    const warper = mount(<Provider store={store}><TheHeader/></Provider>)
    expect(warper.find(`[data-test='txt-basket']`).text()).toBe('2')
  });
});
