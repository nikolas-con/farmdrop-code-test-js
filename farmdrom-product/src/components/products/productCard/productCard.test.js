import React from 'react';
import { mount } from 'enzyme';

import ProductCard from './productCard'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'
import mockData from '../../../support/mock/mockData'

import thunk from 'redux-thunk'
const mockStore = configureStore([thunk])

const mockProduct = mockData.data.productSearch.nodes[0]

describe('renders <ProductCard/>', () => {
  it('ckeck the elemenet product card', () => {
    let store = mockStore({basketProducts: []})
    let configProps = { product: mockProduct, basket: [] }
    let wrapper = mount(<Provider store={store}><ProductCard key={mockProduct.name} {...configProps}/></Provider>)
    expect(wrapper.find(`[data-test='txt-product-name']`).text()).toBe(mockProduct.name)
  })
  it('ckeck the elemenet product card', () => {
    let store = mockStore({basketProducts: []})
    let configProps = { product: mockProduct, basket: [] }
    let wrapper = mount(<Provider store={store}><ProductCard key={mockProduct.name} {...configProps}/></Provider>)
    expect(wrapper.find(`[data-test='txt-producer-name']`).text()).toBe(mockProduct.producer.name)
  })
})