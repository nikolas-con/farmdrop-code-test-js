import React from 'react';
import { mount } from 'enzyme';
import TheProductGrind from './TheProductGrind'

import configureStore from 'redux-mock-store'
import mockData from '../../support/mock/mockData'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
const mockStore = configureStore([thunk])

const mockProducts = mockData.data.productSearch.nodes


describe('renders TheProductGrind', ()=>{
  it('ckeck <TheProdutcGrind/> if are data fetched', ()=>{
    const store = mockStore({products: mockProducts, basket: []})
    const warper = mount(<Provider store={store}><TheProductGrind/></Provider>)
    expect(warper.find(`[data-test='list-product-grind']`).children().length).toBe(23)
  })

  it('ckeck <TheProdutcGrind/> if are not data fetched', ()=>{
    const store = mockStore({products: [], basket: []})
    const warper = mount(<Provider store={store}><TheProductGrind/></Provider>)
    
    expect(warper.find(`[data-test='list-product-grind']`).children().length).toBe(0)
  })
})
