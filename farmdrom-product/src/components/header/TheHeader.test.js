import React from 'react';
import { mount } from 'enzyme';
import TheHeader from './TheHeader';

import configureStore from 'redux-mock-store'
import mockData from '../../support/mock/mockData'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
const mockStore = configureStore([thunk])

const mockProducts = mockData.data.productSearch.nodes
// nomizo theli kai alla test alla tr na doume
describe('renders <TheHeader/> componet',() => {
  it('Should render without errors', () => {
    const store = mockStore({products: mockProducts, basket: []})
    const warper = mount(<Provider store={store}><TheHeader/></Provider>)
    expect(warper.find(`[data-test='img-logo']`).length).toBe(1)
    expect(warper.find(`[data-test='img-basket-icon']`).length).toBe(1)
    expect(warper.find(`[data-test='txt-basket']`).text()).toBe('0')
  });
});
